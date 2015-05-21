var MainLayoutLV = Mn.LayoutView.extend({
	attributes: {
		"style": "height: 100%;"
	},
	template: "main-layout/templates/main-layout.html",

	// initialize: function(){
	// 	leftMenuChannel.on("show:main:right", this.showViewRight, this);
	// },

	regions: {
		mainLeftRegion: "#main-left-region",
		mainRightRegion: "#main-right-region"
	},

	onBeforeShow: function(view, region){
		// var menuLeftIV = new MenuLeftIV({
		// 	collection: menuLeftC
		// });
		// this.mainLeftRegion.show(menuLeftIV);

		//this.showMainMenuLeft();
		this.showMap();
	},

	// showMainMenuLeft: function(){
	// 	var mainMenuLeftIV = new MainMenuLeftIV();
	// 	this.mainLeftRegion.show(mainMenuLeftIV);
	// },

	showMap: function(){
		var mapIV = new MapIV();
		this.mainRightRegion.show(mapIV);
	},

	// showViewRight: function(code){

	// 	switch(code){
	// 		case "#profile":
	// 			this.showProfile();
	// 			break;
	// 		case "#texts":
	// 			this.showTexts();
	// 			break;
	// 		case "#users":
	// 			this.showUsers();
	// 			break;
	// 		case "#files":
	// 			this.showFiles();
	// 			break;
	// 		case "#maps":
	// 			this.showMaps();
	// 			break;
	// 		default:
	// 			throw new Error("showViewRight: unknown code");
	// 			break;
	// 	}
	// },


	// showProfile: function(){
	// 	var userM = new UserM();
	// 	userM.set("id", Clima.userId);

	// 	var profileLV = new ProfileLV({
	// 		model: userM
	// 	});

	// 	var self = this;

	// 	Q(userM.fetch())
	// 		.then(
	// 			function(){ 
	// 				self.mainRightRegion.show(profileLV); 
	// 			}, 
	// 			function(jqXHR){
	// 				var msg = jqXHR.responseJSON.message;
	// 				alert("ERROR: " + msg);
	// 				throw new Error(msg);
	// 			}
	// 		)
	// 		.done();
	// },

	// showTexts: function(){
	// 	var textsTabLV = new TextsTabLV();
	// 	this.mainRightRegion.show(textsTabLV);
	// },

	// showUsers: function(){
	// 	var usersTabLV = new UsersTabLV();
	// 	this.mainRightRegion.show(usersTabLV);
	// },

	// showFiles: function(){
	// 	var filesTabLV = new FilesTabLV();
	// 	this.mainRightRegion.show(filesTabLV);
	// },

	// showMaps: function(){
	// 	var mapsTabLV = new MapsTabLV();
	// 	this.mainRightRegion.show(mapsTabLV);
	// },



});
