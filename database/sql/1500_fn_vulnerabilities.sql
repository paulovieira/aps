
/*

	1. READ

*/

DROP FUNCTION IF EXISTS vulnerabilities_read(json);

CREATE FUNCTION vulnerabilities_read(options json DEFAULT '[{}]')

-- return table, uses the definition of the maps table + extra data from the join
RETURNS TABLE(
	lat REAL,
	lon REAL,
	description TEXT,
	value SMALLINT
)
AS
$BODY$

DECLARE
	options_row json;
	command text;
	number_conditions INT;
	marker geometry;

	-- fields to be used in WHERE clause
	lat REAL;
	lon REAL;
	description TEXT;
	map_table TEXT;
	geojson_point JSON;

BEGIN


-- convert the json argument from object to array of (one) objects
IF  json_typeof(options) = 'object'::text THEN
	options = ('[' || options::text ||  ']')::json;
END IF;
    
FOR options_row IN ( select json_array_elements(options) ) LOOP

	-- extract values to be (optionally) used in the WHERE clause
	SELECT json_extract_path_text(options_row, 'lat')::real         INTO lat;
	SELECT json_extract_path_text(options_row, 'lon')::real         INTO lon;
	SELECT COALESCE(json_extract_path_text(options_row, 'description')::text, '(no description)')   INTO description;
	SELECT json_extract_path_text(options_row, 'map_table')::text         INTO map_table;

	command := 'SELECT ' || lat || '::real AS lat, ' || lon || '::real AS lon, ''' || description ||'''::text as description,  vuln.value FROM ' || map_table || ' AS vuln ';

	IF lat IS NULL OR lon IS NULL THEN
		CONTINUE;
	END IF;
		
	SELECT json_build_object(
		'type', 'Point', 
		'coordinates', json_build_array(lon, lat)
		) INTO geojson_point;

	command = command || ' WHERE ST_Contains(vuln.geom, ST_SetSRID( ST_GeomFromGeoJSON('' ' || geojson_point || ' ''), 4326 ))';	
		
	RETURN QUERY EXECUTE command;

END LOOP;
		
RETURN;
END;
$BODY$
LANGUAGE plpgsql;

/*
select * from vulnerabilities_read('[{"lat":38.75, "lon": -9.15, "map_table": "cirac_vul_bgri_fvi_n"}, {"lat":38.85, "lon": -9.17, "map_table": "cirac_vul_bgri_fvi_n"}]');

select * from vulnerabilities_read('[{"lat":38.75, "lon": -9.15, "description": "xyz", "map_table": "cirac_vul_bgri_fvi_n"}]');
select * from vulnerabilities_read('[{"lat":38.75, "lon": -9.15,  "map_table": "cirac_vul_bgri_fvi_n"}]');
*/