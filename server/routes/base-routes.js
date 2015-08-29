var config = require('config');
//var utils = require(global.rootPath +  'server/common/utils.js');
var pre = require(global.rootPath +  'server/common/pre.js');
var validate = require(global.rootPath + 'server/common/validate.js');
var baseHandlers = require(global.rootPath + 'server/routes/base-handlers.js');
var Boom = require("boom");
var Wreck = require("wreck");


var routes = [


    // if lang param is not given, direct immediately to the default laguage
    {
        path: "/",
        method: "GET",
        handler: baseHandlers.index,
        
        config: {
            auth: false,
        }
    },


    {
        path: "/{lang}",
        method: "GET",
        handler: baseHandlers.generalPage,

        config: {
            auth: {
                mode: "try"
            },

            validate: {
                params: validate.params.lang
            },

            pre: [
                [pre.db.readAllTexts, pre.db.readAllFiles],
                [pre.transform.texts, pre.transform.textsArray, pre.transform.files],
                [pre.filterImages]
            ]
        }

    },


    {
        path: "/{lang}/{level1}",
        method: "GET",
        handler: baseHandlers.generalPage,

        config: {
            auth: {
                mode: "try"
            },

            validate: {
                params: validate.params.lang
            },

            pre: [
                [pre.db.readAllTexts, pre.db.readAllFiles],
                [pre.transform.texts, pre.transform.textsArray, pre.transform.files],
                [pre.filterImages]
            ]
        }
    },


    {
        path: "/{lang}/{level1}/{level2}",
        method: "GET",
        handler: baseHandlers.generalPage,

        config: {
            auth: {
                mode: "try"
            },

            validate: {
                params: validate.params.lang
            },

            pre: [
                [pre.db.readAllTexts, pre.db.readAllFiles],
                [pre.transform.texts, pre.transform.textsArray, pre.transform.files],
                [pre.filterImages]
            ]
        }
    },


    {
        path: "/{lang}/{level1}/{level2}/{level3}",
        method: "GET",
        handler: baseHandlers.generalPage,

        config: {
            auth: {
                mode: "try"
            },

            validate: {
                params: validate.params.lang
            },

            pre: [
                [pre.db.readAllTexts, pre.db.readAllFiles],
                [pre.transform.texts, pre.transform.textsArray, pre.transform.files],
                [pre.filterImages]
            ]
        }
    },


    {
        method: "GET",
        path: "/{lang}/recover",
        handler: baseHandlers.recover,

        config: {
            auth: false,

            validate: {
                params: validate.params.lang,
                query: validate.query.recoverToken
            },

            pre: [
                [pre.db.readAllTexts, pre.db.readUserByToken],
                pre.transform.texts
            ]
        }

    },


    {
        method: "GET",
        path: "/{lang}/404",
        handler: baseHandlers.missing,

        config: {
            auth: false,

            validate: {
                params: validate.params.lang
            },

            pre: [
                [pre.db.readAllTexts],
                pre.transform.texts
            ]
        }

    },

    {
        method: "GET",
        path: "/{lang}/login",
        handler: baseHandlers.login,

        config: {
            auth: {
                mode: "try"
            },

            validate: {
                params: validate.params.lang
            },

            pre: [
                [pre.db.readAllTexts],
                pre.transform.texts
            ]
        }
    },

    {
        method: "POST",
        path: "/{lang}/loginAuthenticate",
        handler: baseHandlers.loginAuthenticate,

        config: {
            auth: {
                mode: "try"
            },

            validate: {
                params: validate.params.lang
            }
        }
    },

    {
        method: "GET",
        path: "/{lang}/logout",
        handler: baseHandlers.logout,
        config: {
            auth: false,

            validate: {
                params: validate.params.lang
            }
        }
    },

    {
        method: "GET",
        path: "/{lang}/cirac",
        handler: baseHandlers.cirac,

        config: {

            auth: config.get('hapi.auth'),

            validate: {
                params: validate.params.lang
            },

            pre: [
                [pre.db.readAllTexts, pre.db.readAllFiles],
                [pre.transform.texts, pre.transform.textsArray, pre.transform.files, pre.transform.filesArray]
            ]
        },
    },


    // reverse proxy for tilestream (see also the cached version below)
    {
        method: "GET",
        path: "/tiles/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    console.log("xxx");
                    return cb(null, "http://localhost:8001/" + request.params.anyPath);                    
                }
            }
        },

        config: {
            auth: false,
        },
    },


    // reverse proxy for tilestream (cached version - it has to be improved because it takes a lot of time doing the converson)
    {
        method: "GET",
        path: "/cachedtiles/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:8001/" + request.params.anyPath);                    
                },
                onResponse: function(err, res, request, reply, settings, ttl){
                    
                    if(err){
                        return reply(Boom.badImplementation());
                    }


                    //var buffer = new Buffer("I'm a string!", "utf-8");
                    //console.log(buffer instanceof Buffer);

                    console.log("cacheId", request.pre.cacheId);
                    Wreck.read(res, null, function (err, buffer) {

                        request.server.app.memoryCachePolicy.set(request.pre.cacheId, buffer, 0, function(err){
                            if(err){
                                return reply(Boom.badImplementation());
                            }

                            console.log("the tile was cached");
                            return reply(buffer);
                        });

                    });
                    
                }
            }
        },

        config: {
            auth: false,
            pre: [{
                method: function(request, reply){

                    var array = (request.params.anyPath).split("/");
                    array.shift();
                    var cacheId = array.join("/");


                    console.log("checking cache...");
                    request.server.app.memoryCachePolicy.get(cacheId, function(err, value, cachedData, report){

                        //console.log("value: \n", value);
                        // console.log("is buffer: ", value instanceof Buffer);
                        // console.log("is array: ", value instanceof Array);
                        // if(cachedData){
                        //     console.log("is buffer 2: ", cachedData.item instanceof Buffer);
                        // }
                        //console.log("cachedData: \n", cachedData);
                        //console.log("\nreport: \n", report);
                        //console.log("--------------")

                        if(err){
                            return cb(err);
                        }

                        if(cachedData){
                            console.log("the tile was served from cache!")
                            //return reply(cachedData.item).takeover();
                            var buffer = new Buffer(value);
                            return reply(buffer).takeover();
                        }

                        // continue to the handler (which in this case will be mapUri and onResponse)
                        return reply(cacheId);

                    });


                },
                assign: "cacheId"
            }]
        },
    },

    // tilejson route (obtain the json produced by tilemill)

    {
        method: "GET",
        path: "/api/tilejson/{param?}",
        handler: {
            directory: {
                path: "/home/pvieira/Documents/MapBox/export",
                //listing: true
            }
        },

        config: {
            auth: false
        }
    },


    // tilemill routes

/*

    GET /api/Project
    GET /api/updatesVersion
GET /api/Error  (??? - nao encontrei)
    GET /api/Export
    PUT /api/Export
    GET /api/Preview
    GET /api/Config
    GET /export


Falta adicionar  (qual o metodo?)
    /api/Favorite/
    /api/Library/
    /api/Page
    /api/Plugin
    /api/Key
    /status
    /restart

    /assets
    /manual
    /oauth
    /tile
    /datasource
    /clear-mapnik-cache

    */
    {
        method: "GET",
        path: "/{lang}/tilemill",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    console.log("proxy: tilemill index");
                    return cb(null, "http://localhost:20009/");
                },
            }
        },

        config: {

            auth: config.get('hapi.auth'),

            validate: {
                params: validate.params.lang
            }
        },
    },

    {
        method: "GET",
        path: "/assets/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },

    {
        method: "GET",
        path: "/api/Project/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },

    {
        method: "GET",
        path: "/api/updatesVersion/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },


    {
        method: "GET",
        path: "/api/Error/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },

    {
        method: "GET",
        path: "/api/Export/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },

    {
        method: "PUT",
        path: "/api/Export/{anyPath*}",
        handler: {
            proxy: {
                passThrough: true,
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },

    {
        method: "GET",
        path: "/api/Preview/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },

    {
        method: "GET",
        path: "/api/Config/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },

    {
        method: "GET",
        path: "/export/{anyPath*}",
        handler: {
            proxy: {
                mapUri: function(request, cb){
                    return cb(null, "http://localhost:20009" + request.path);
                },
            }
        },

        config: {

            auth: false

        },
    },



    // {
    //     method: "GET",
    //     path: "/{lang}/testpre",
    //     handler: baseHandlers.testpre,

    //     config: {
    //         auth: {
    //             mode: "try"
    //         },

    //         validate: {
    //             params: validate.params.lang
    //         },

    //         pre: [
    //             // running the pre method in parallel is equivalent to using only 1 pre method
    //             // taking care of several promises and using Q.all([promise1, promise2]);
    //             // the route handler will only execute when ALL the pre-handlers have called reply()
    //             //[pre.db.readAllTexts, pre.db.read_users],  
    //             [pre.db.readAllUsers],
    //             //                utils.pre.db.readAllTexts,
    //             //              utils.pre.db.read_users
    //         ]
    //     }
    // },


    {
        method: "GET",
        path: "/test_footer",
        handler: function(request, reply){
            return reply.view("test_footer");
        },
        config: {
            auth: false
        }
    },

];

//utils.addPrerequisites(routes);

console.log("Routes without the redirectOnInvalidLang pre-requisite:");

routes
    .filter(function(routeObj) {
        if (routeObj.config &&
            routeObj.config.validate &&
            routeObj.config.validate.params === validate.params.lang) {
            return true;
        }

        console.log("   " + routeObj.path);
        return false;
    })
    .forEach(function(routeObj) {
        routeObj.config.pre = routeObj.config.pre || [];
        routeObj.config.pre.unshift(pre.redirectOnInvalidLang);
    });

module.exports = routes;
