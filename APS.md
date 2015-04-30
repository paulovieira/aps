# DEMO APS

## database
  - create the database: 
      createdb aps_150428

  - run the scripts + initial data

  - update the configuration files: database name

  - add the bgri shape:

shp2pgsql -D -I -s 4326 BGRI/Indice-de-vulnerabilidade/cirac_vul_bgri_FVI_N.shp cirac_vul_bgri_FVI_N |  psql --dbname=aps_150428

## tiles

in a separate directory, clone tilestream and start the tile server

    git clone https://github.com/mapbox/tilestream
    sudo npm install
    ./index.js start --tiles=... --tilePort=8001

tiles will be available from 

    http://localhost:8001/v2/MBTILES_FILENAME/{z}/{x}/{y}.png

where "MBTILES_FILENAME" is the name of the mbtiles file

We now have to configure nginx to access the tiles from the outside (in the perspective of the browser, the tiles will be outside).