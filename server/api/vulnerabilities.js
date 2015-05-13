var stream = require('stream');
var Path = require('path');
var Boom = require('boom');
var Joi = require('joi');
var config = require('config');
var fs = require('fs');
var Q = require("q");
var rimraf = require("rimraf");
var XLSX = require('xlsx');
var db = require(global.rootPath + 'server/common/db.js').dbInstance;
var pgp = require(global.rootPath + 'server/common/db.js').pgp;

//var ent = require("ent");
var _ = require('underscore');
var _s = require('underscore.string');
var changeCaseKeys = require('change-case-keys');

var BaseC = require("../../server/models/base-model.js").collection;
var utils = require('../../server/common/utils.js');
var transforms = require('../../server/common/transforms.js');
var pre = require('../../server/common/pre.js');



var internals = {};
/*** RESOURCE CONFIGURATION ***/

internals.resourceName = "vulnerabilities";
internals.resourcePath = "/vulnerabilities";



// validate the ids param in the URL
internals.validateCoordinates = function(value, options, next){
debugger;

    value.coordinates = _s.trim(value.coordinates, ",").split(",");


    var coordinatesSchema = Joi.number();

    // must be an objet like this: { ids: [3,5,7] }
    var schema = Joi.object().keys({
        coordinates: Joi.array().includes(coordinatesSchema)
    });

    var validation = Joi.validate(value, schema, config.get('hapi.joi'));

    if(validation.error){  return next(validation.error);  }

    return next(undefined, validation.value);
};

/*
internals.validatePayloadForCreate = function(value, options, next){

    console.log("validatePayloadForCreate");

    var schemaCreate = Joi.object().keys({

        code: Joi.string().required(),

        srid: Joi.number().integer().required(),

        description: Joi.object().keys({
            pt: Joi.string().allow(""),
            en: Joi.string().allow("")
        }),

        fileId: Joi.number().integer().required(),

    });

    return internals.validatePayload(value, options, next, schemaCreate);
};


internals.validatePayloadForUpdate = function(value, options, next){

    console.log("validatePayloadForUpdate");

    var schemaUpdate = Joi.object().keys({
        id: Joi.number().integer().min(0).required(),

        description: Joi.object().keys({
            pt: Joi.string().allow("").required(),
            en: Joi.string().allow("").required()
        }),


    });

    return internals.validatePayload(value, options, next, schemaUpdate);
};



internals.validatePayload = function(value, options, next, schema){
debugger;

    if(_.isObject(value) && !_.isArray(value)){  value = [value];  }

    // validate the elements of the array using the given schema
    var validation = Joi.validate(value, Joi.array().includes(schema), config.get('hapi.joi'));

    if(validation.error){  return next(validation.error); }


    // validateIds was executed before this one; the ids param (if defined) is now an array of integers
    var ids = options.context.params.ids;

    // finally, if the ids param is defined, make sure that the ids in the param and the ids in the payload are consistent
    if(ids){
        for(var i=0, l=validation.value.length; i<l; i++){
            // ids in the URL param and ids in the payload must be in the same order
            if(ids[i] !== validation.value[i].id){
                return next(Boom.conflict("The ids given in the payload and in the URI must match (including the order)."));
            }
        }
    }

    // update the value that will be available in request.payload when the handler executes;
    // there are 2 differences: a) Joi has coerced the values to the type defined in the schemas;
    // b) the keys will be in underscored case (ready to be used by the postgres functions)
    return next(undefined, changeCaseKeys(validation.value, "underscored"));
};
*/

/*** END OF RESOURCE CONFIGURATION ***/



// plugin defintion function
exports.register = function(server, options, next) {
/*
	// READ (all)
    server.route({
        method: 'GET',
        path: internals.resourcePath,
        handler: function (request, reply) {
            console.log(utils.logHandlerInfo(request));
debugger;

            var shapesC = request.pre.allShapes;

            var resp         = shapesC.toJSON();
            var transformMap = transforms.maps.shapes;
            var transform    = transforms.transformArray;

            return reply(transform(resp, transformMap));
        },

        config: {

            pre: [
                pre.abortIfNotAuthenticated,
                pre.db.getAllShapes
            ],

            auth: config.get('hapi.auth'),
			description: 'Get all the resources',
			notes: 'Returns all the resources (full collection)',
			tags: ['api'],
        }
    });
*/


	// READ (one or more, but not all)
    server.route({
        method: 'GET',
        path: internals.resourcePath + "/{coordinates}",
        handler: function (request, reply) {
            console.log(utils.logHandlerInfo(request));
debugger;

        var lat = request.params.coordinates[0],
             lon = request.params.coordinates[1];

console.log("request.query: ", request.query);

        db.func('vulnerabilities_read', {lat: lat, lon: lon, map_table: request.query.map})
            .then(function(data){
                debugger;
                console.log("           success handler (then)")
                return reply(data);
            })
            .catch(function(errMsg){
                debugger;
                console.log("           error handler (catch)")
                return reply(Boom.badImplementation(errMsg));
            });

            // var resp         = shapesC.toJSON();
            // var transformMap = transforms.maps.shapes;
            // var transform    = transforms.transformArray;

    //        return reply(transform(resp, transformMap));
//            return reply({lat: request.params.coordinates[0], lon: request.params.coordinates[1]} )
        },

        config: {

			validate: {
	            params: internals.validateCoordinates,
			},

            pre: [
                pre.abortIfNotAuthenticated,
  //              pre.db.getShapesById
            ],

            auth: config.get('hapi.auth'),
			description: 'Get 2 (short description)',
			notes: 'Get 2 (long description)',
			tags: ['api'],

        }
    });


    // CREATE (one or more)
    server.route({
        method: 'POST',
        path: internals.resourcePath,
        handler: function (request, reply) {
            console.log(utils.logHandlerInfo(request));
debugger;

//console.log("request.payload: ", JSON.stringify(request.payload));
//console.log("request.payload: ", JSON.stringify(request.payload.shapeDescription));

            //var filename     = request.payload.new_file.hapi.filename;
            var filename     = request.payload.filename;
            var mapTable     = request.payload.mapTable;
            var logicalPath  = config.get("uploads.logicalPath");
            var physicalPath = config.get("uploads.physicalPath");

            if(typeof physicalPath!=="string" || typeof filename!=="string"){
                return reply(Boom.badRequest("filename and physical path must be strings"));
            }

            var xlsFullPath = Path.join(global.rootPath, physicalPath, filename);
            var ws = fs.createWriteStream(xlsFullPath);
            request.payload.new_file.pipe(ws);

            ws.on("finish", function(){

                var workbook = XLSX.readFile(xlsFullPath);
                var worksheet = workbook.Sheets[workbook.SheetNames[0]];

                worksheet = XLSX.utils.sheet_to_json(worksheet);

//console.log("worksheet: ", worksheet);
                worksheet.forEach(function(obj){ obj.mapTable = mapTable; })

                //var dbData = pgp.as.json(changeCaseKeys(worksheet, "underscored"));
                var dbData = JSON.stringify(changeCaseKeys(worksheet, "underscored"));
               
//console.log("dbData: ", dbData);
                db.func('vulnerabilities_read', dbData)
                    .then(function(data){
                        debugger;
                        console.log("           success handler (then)")
                        return reply(data);
                    })
                    .catch(function(errMsg){
                        debugger;
                        console.log("           error handler (catch)")
                        return reply(Boom.badImplementation(errMsg));
                    });


                
            });

            ws.on("error", function(err){
                return reply(Boom.badImplementation(err.message));
            });


        },
        config: {
            validate: {
                // NOTE: to crate a new file we have to send the file itself in a form (multipart/form-data);
                // but if we do the validation the buffer will somehow be messed up by Joi; so here we don't
                // do the validation

                //payload: internals.validatePayloadForCreate
            },
            auth: config.get('hapi.auth'),
            pre: [
                pre.abortIfNotAuthenticated,
                pre.payload.extractTags
            ],

            payload: {
                output: "stream",
                parse: true,
                maxBytes: 1048576*300  // 3 megabytes
            },
            description: 'Post (short description)',
            notes: 'Post (long description)',
            tags: ['api'],
        }
    });


/*
    // CREATE (one or more)
    server.route({
        method: 'POST',
        path: internals.resourcePath,
        handler: function (request, reply) {
            console.log(utils.logHandlerInfo(request));
debugger;

//console.log("dbData: ", JSON.stringify(changeCaseKeys(request.payload, "underscored")));
console.log("request.payload: ", JSON.stringify(request.payload));

            var dbData = request.payload[0]
                filesC = request.pre.allFiles,
                shapesC  = request.pre.allShapes,
                shpSchema = "geo",
                srid  = dbData["srid"],
                shpTable  = _s.underscored(_s.slugify(dbData["code"])),
                shpFile = "";

            if(shapesC.findWhere({code: shpTable})){
                return reply(Boom.conflict("The shape code must be unique."));
            }

            // make sure the zip file really exists in the server (it might have been delete meanwhile)
            var fileM = filesC.findWhere({id: request.payload[0]["file_id"]});
            if(!fileM){
                return reply(Boom.conflict("The zip file does not exist in the server"));
            }

            var physicalPath = fileM.get("physicalPath"),
                zipFile = fileM.get("name"),
                zipFullPath = Path.join(global.rootPath, physicalPath, zipFile),
                zipFileWithoutExt = zipFile.slice(0, zipFile.length - 4),
                zipOutputDir = Path.join(global.rootPath, physicalPath, zipFileWithoutExt);
                

            console.log("global.rootPath: ", global.rootPath)
            console.log("physicalPath: ", physicalPath)
            console.log("zipFile: ", zipFile)
            console.log("zipFileWithoutExt: ", zipFileWithoutExt)

// TODO: find a more robust way to verify that the file is indeed a zip file
            if(!_s.endsWith(zipFile, ".zip")){
                return reply(Boom.conflict("The file must be in zip format."));
            }


            var deferred = Q.defer(),
                promise = deferred.promise;

            // step 1: delete the directory where the unzip will be outputed (if it doesn't
            // exists, don't throw an error)
            rimraf(zipOutputDir, function(err){
                if(err){
                    return deferred.reject(err);
                }

                return deferred.resolve();
            });

            // step 2: extract the zip file; a dedicated (temporary) folder will be created
            promise
            .then(function(val){
                var deferred2 = Q.defer();

                fs.mkdirSync(zipOutputDir);
               
                fs.createReadStream(zipFullPath)
                    .pipe(unzip.Extract({ path: zipOutputDir }))
                    .on("close", function(){
                        // the zip has been successfully extracted; now get an array 
                        // with the names of files in zipOutputDir that have the .shp extension
                        var files = fs.readdirSync(zipOutputDir).filter(function(filename){
                            return _s.endsWith(filename, ".shp");
                        });

                        if(files.length!==1){
                            var err = new Error("the zip must contain one .shp file (and only one)");
                            return deferred2.reject(err);
                        }

                        shpFile = files[0];
                        return deferred2.resolve()
                    })
                    .on("error", function(err){
                        return deferred2.reject(err);
                    });

                return deferred2.promise;
            })

            // step 3: execute shp2pgsql; the table name will be the map code (which has the unique constraint)
            .then(function(){
                var deferred3 = Q.defer();
               
                // the command is:  shp2pgsql -D -I -s 4326 <path-to-shp-file>  <name-of-the-table>   |  psql --dbname=<name-of-the-database>
                var command1 = "shp2pgsql -D -I -s " + srid + " "
                            + Path.join(zipOutputDir, shpFile) + " " + shpSchema + "." + shpTable,

                    command2 = "psql --dbname=" + config.get("db.postgres.database"),

                    command = command1 + " | " + command2;

                console.log("command: ", command);

                exec(command, function(err, stdout, stderr){
                    if(err){
                        console.log("error in exec: ", err);
                        return deferred3.reject(err);
                    }

                    console.log("stdout: \n", stdout);
                    if(_s.include(stdout.toLowerCase(), "create index") && 
                        _s.include(stdout.toLowerCase(), "commit")){
                        return deferred3.resolve();
                    }
                    else{
                        return deferred3.reject(new Error("shp2pgsql did not commit"));
                    }

                })

                return deferred3.promise;
            })

            // step 4: create the row in the shapes table
            .then(function(){

                // add the fields that are missing from the payload (server-side information)
                dbData["schema_name"] = shpSchema;
                dbData["owner_id"]    = request.auth.credentials.id;

                console.log("dbData: ", dbData);

                var promise = shapesC.execute({
                    query: {
                        command: "select * from shapes_create($1);",
                        arguments: [JSON.stringify(changeCaseKeys(dbData, "underscored"))]
                    },
                    reset: true
                });

                return promise;
            })

            // TODO: read the fresh data ? 

            .then(function(){
debugger;
                var resp         = shapesC.toJSON();
                var transformMap = transforms.maps.shapes;
                var transform    = transforms.transformArray;

                return reply(transform(resp, transformMap));
            })

            .catch(function(err){
                return reply(Boom.badImplementation(err));
            })

            // step 5: delete the zip output directory
            .finally(function(){
                var deferred = Q.defer();
                console.log("finally!");

                rimraf(zipOutputDir, function(err){
                    if(err){
                        return deferred.reject(err);
                    }

                    return deferred.resolve();
                });

                return deferred.promise;
            })
            .done();

        },
        config: {

        	validate: {
                // NOTE: to crate a new file we have to send the file itself in a form (multipart/form-data);
                // but if we do the validation the buffer will somehow be messed up by Joi; so here we don't
                // do the validation

                payload: internals.validatePayloadForCreate
        	},

            pre: [
                [pre.abortIfNotAuthenticated],
                [pre.db.getAllFiles, pre.db.getAllShapes]
            ],

            auth: config.get('hapi.auth'),
			description: 'Post (short description)',
			notes: 'Post (long description)',
			tags: ['api'],
        }
    });



    server.route({
        method: 'PUT',
        path: internals.resourcePath + "/{ids}",
        handler: function (request, reply) {

            console.log(utils.logHandlerInfo(request));
debugger;


            var shapesC = request.pre.shapesById;
            if(shapesC.length===0){
                return reply(Boom.notFound("The resource with id " + request.params.ids[0] + " does not exist."));
            }

            shapesC.execute({
                query: {
                    command: "select * from shapes_update($1);",
                    arguments: [JSON.stringify(request.payload[0])]
                },
                reset: true 
            })
            .then(function(updatedData){

                // read the data that was updated (to obtain the joined data)
                return shapesC.execute({
                    query: {
                        command: "select * from shapes_read($1);",
                        arguments: [JSON.stringify( {id: updatedData[0].id} )]
                    },
                    reset: true
                });

            })
            .then(function(){
                // we couldn't read - something went wrong
                if(shapesC.length===0){
                    return reply(Boom.badImplementation());
                }

                var resp         = shapesC.toJSON();
                var transformMap = transforms.maps.shapes;
                var transform    = transforms.transformArray;

                return reply(transform(resp, transformMap));
            })
            .catch(function(err){
                return reply(Boom.badImplementation(err.message));
            })
            .done();

        },

        config: {
            validate: {
                params: internals.validateIds,
                payload: internals.validatePayloadForUpdate
            },

            pre: [
                pre.abortIfNotAuthenticated,
                pre.db.getShapesById
            ],

            auth: config.get('hapi.auth'),
            description: 'Put (short description)',
            notes: 'Put (long description)',
            tags: ['api'],
        }
    });


    // DELETE (one or more)
    server.route({
        method: 'DELETE',
        path: internals.resourcePath + "/{ids}",
        handler: function (request, reply) {
debugger;
            console.log(utils.logHandlerInfo(request));

            var shapesC = request.pre.shapesById;
            if(shapesC.length===0){
                return reply(Boom.notFound("The resource with id " + request.params.ids[0] + " does not exist."));
            }

            shapesC.execute({
                query: {
                    command: "select * from shapes_delete($1)",
                    arguments: [JSON.stringify( {id: request.params.ids[0]} )]
                },
                reset: true
            })
            .then(function(){
                return reply(shapesC.toJSON());
            })
            .catch(function(err){
                return reply(Boom.badImplementation(err.message));
            })
            .done();
        },

        config: {
            validate: {
                params: internals.validateIds,
            },

            pre: [
                pre.abortIfNotAuthenticated,
                pre.db.getShapesById
            ],

            auth: config.get('hapi.auth'),
            description: 'Delete (short description)',
            notes: 'Delete (long description)',
            tags: ['api'],
        }
    });
*/

/*
    // DELETE (one or more)
    server.route({
        method: 'DELETE',
        path: internals.resourcePath + "/{ids}",
        handler: function (request, reply) {
debugger;

            var queryOptions = [];
            request.params.ids.forEach(function(id){
                queryOptions.push({id: id});
            });

                    // var boomErr = internals.parseError(err);
                    // return reply(boomErr);

            var filesC = new FilesC();
            filesC.execute({
                query: {
                    command: "select * from files_delete($1)",
                    arguments: [ JSON.stringify(queryOptions) ]
                },
                reset: true
            })
            .done(
                function(){
debugger;
                    return reply(filesC.toJSON());
                },
                function(err){
debugger;
                    var boomErr = internals.parseError(err);
                    return reply(boomErr);
                }
            );
        },

        config: {
			validate: {
	            params: internals.validateIds,
			},
            pre: [pre.abortIfNotAuthenticated],
            auth: config.get('hapi.auth'),

			description: 'Delete (short description)',
			notes: 'Delete (long description)',
			tags: ['api'],

        }
    });
*/
    // any other request will receive a 405 Error
    server.route({
        method: '*',
        path: internals.resourcePath + "/{p*}",
        handler: function (request, reply) {
        	var output = Boom.methodNotAllowed('The method is not allowed for the given URI.');  // 405
            reply(output);
        }
    });

    next();
};

exports.register.attributes = {
    name: internals.resourceName,
    version: '1.0.0'
};





/*

CURL TESTS
====================


curl http://127.0.0.1:3000/api/shapes  \
    --request GET

curl http://127.0.0.1:3000/api/shapes/1  \
    --request GET

curl http://127.0.0.1:3000/api/shapes/1,2  \
    --request GET


-------------------------------


curl http://127.0.0.1:3000/api/shapes  \
    --request POST  \
    --header "Content-Type: application/json"  \
    --data '{ "code": "fwefwefwefweyyxx", "description": { "pt": "uuu", "en": "ttt"}, "fileId": 48, "srid": 4326 }' 


-------------------------------


curl http://127.0.0.1:3000/api/shapes/1021  \
    --request PUT  \
    --header "Content-Type: application/json"  \
    --data '{ "id": 1021, "description": { "pt": "yabcx", "en": "zdefy"} }'


-------------------------------


curl http://127.0.0.1:3000/api/shapes/1  \
    --request DELETE



*/