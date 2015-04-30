var leftMenuChannel = Backbone.Radio.channel('leftMenu');

var Cirac = new Mn.Application();
Cirac.$modal1 = $("#modal-1");
Cirac.$modal2 = $("#modal-2");

Cirac.addRegions({
	mainRegion: "#main-region",
	modal1Region: "#modal1-content-region",
	modal2Region: "#modal2-content-region"
});

var mainLayout = new MainLayoutLV();

Cirac.mainRegion.show(mainLayout);


