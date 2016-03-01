// the initial module is where we make global wide configurations (load other modules, set global variables, etc)
var Path = require('path');

// the global rootPath will be used for every require() that is not a module in node_modules
global.rootPath = Path.normalize(__dirname) + "/";

// load general purpose modules
require('pretty-error').start();

var chalk = require('chalk');
require('debug-trace')({
	always: true,
	right: true,
	dateFormat: "YY.MM.DD HH:mm:ss",

});

console.format = function(c) {
	//return c.date + ": " + "[".cyan + c.filename.cyan + ":".cyan + ("" + c.getLineNumber()).cyan + "] " + c.functionName;
	return c.date + ": " + "[" + chalk.cyan(c.filename) + ":" + ("" + c.getLineNumber()) + "] " + c.functionName;
}


// if there is no environment, set the default one ("production") (see the diferent configuration in /config)
// this must be done before the config module is required
if(process.env.NODE_ENV !== "dev" && process.env.NODE_ENV !== "dev-no-auth"){
	process.env.NODE_ENV = "production";
}

// load the main server module; this is where the Hapi server object is created
require(global.rootPath + "server/server.js");

