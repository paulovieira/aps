var menuLeftC = new Backbone.Collection([
{
	itemCode: "profile",
	itemTitle: {pt: "Dados pessoais", en: "Personal data"},
	itemIcon: "glyphicon-user"
},

{
	itemCode: "texts",
	itemTitle: Clima.texts[12].contents,
	itemIcon: "glyphicon-font"
},

{
	itemCode: "users",
	itemTitle: {pt: "Utilizadores", en: "Users"},
	itemIcon: "glyphicon-user"
},


{
	itemCode: "groups",
	itemTitle: {pt: "Grupos", en: "Groups"},
	itemIcon: "glyphicon-user"
},

{
	itemCode: "files",
	itemTitle: {pt: "Ficheiros", en: "Files"},
	itemIcon: "glyphicon-folder-open"
},

{
	itemCode: "maps",
	itemTitle: {pt: "Mapas", en: "Maps"},
	itemIcon: "glyphicon-map-marker"	
}

]);

menuLeftC.each(function(model){
	model.set("lang", Clima.lang);
});






var UserM = Backbone.Model.extend({
	urlRoot: "/api/users",
	defaults: {
		"firstName": "",
		"lastName": "",
		"email": "",
		"createdAt": undefined
	},
	initialize: function(){

	},
	parse: function(resp){
		if(_.isArray(resp)){ resp = resp[0]; }

		resp.createdAt = moment(resp.createdAt).format('YYYY-MM-DD HH:mm:ss');

		// for this view we won't need these properties
		delete resp.userGroups;
		delete resp.userTexts;

		return resp;
	},

});

var UsersC = Backbone.Collection.extend({
	model: UserM,
	url: "/api/users"
});

var usersC = new UsersC();



var TextM = Backbone.Model.extend({
	urlRoot: "/api/texts",
	defaults: {
		"tags": [],
		"contents": {pt: "", en: ""},
	},

	parse: function(resp){
		if(_.isArray(resp)){ resp = resp[0]; }
//debugger;

		resp.lastUpdated = moment(resp.lastUpdated).format('YYYY-MM-DD HH:mm:ss');

		return resp;
	}
});

var TextsC = Backbone.Collection.extend({
	model: TextM,
	url: "/api/texts",
});

var textsC = new TextsC();



var FileM = Backbone.Model.extend({
	urlRoot: "/api/files",
	name: "",
	parse: function(resp){
		if(_.isArray(resp)){ resp = resp[0]; }
//debugger;

		resp.uploadedAt = moment(resp.uploadedAt).format('YYYY-MM-DD HH:mm:ss');

		// delete the properties that might be null
		if(resp.description === null){ delete resp.description; }
		if(resp.properties === null){ delete resp.properties; }

		return resp;
	}
});

var FilesC = Backbone.Collection.extend({
	model: FileM,  
	url: "/api/files",
});

var filesC = new FilesC();






var ShapeM = Backbone.Model.extend({
	urlRoot: "/api/shapes",

	parse: function(resp){
		if(_.isArray(resp)){ resp = resp[0]; }

		resp.createdAt = moment(resp.createdAt).format('YYYY-MM-DD HH:mm:ss');

		// sort the shapeColumnsData array in ascending order
		resp.shapeColumnsData = _.sortBy(resp.shapeColumnsData, "column_number");
		
		return resp;
	}
});

var ShapesC = Backbone.Collection.extend({
	model: ShapeM,
	url: "/api/shapes"
});

var shapesC = new ShapesC();





var MapM = Backbone.Model.extend({
	urlRoot: "/api/maps",

	parse: function(resp){
		if(_.isArray(resp)){ resp = resp[0]; }

		resp.createdAt = moment(resp.createdAt).format('YYYY-MM-DD HH:mm:ss');
		
		return resp;
	}
});

var MapsC = Backbone.Collection.extend({
	model: MapM,
	url: "/api/maps"
});

var mapsC = new MapsC();
