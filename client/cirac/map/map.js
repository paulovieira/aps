var MapIV = Mn.ItemView.extend({
	template: "map/templates/map.html",

	onAttach: function(){

		this.initializeMap();
		this.addTileLayers();
		this.registerMapEvents();

	},

	initializeMap: function(){
		this.map = L.map('map');
		this.map.setView([38.75, -9.15], 12);
	},

	addTileLayers: function(){
		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 13,
			opacity: 0.5,
			id: 'examples.map-i875mjb7'
		}).addTo(this.map);

		//L.tileLayer('http://localhost:8080/tiles4/{z}/{x}/{y}.png', {
		L.tileLayer('http://localhost:8001/v2/bgri_lisboa/{z}/{x}/{y}.png', {
			maxZoom: 12
		}).addTo(this.map);
	},

	registerMapEvents: function(){
		this.map.on('click', this.getVulnerability);
	},

	getVulnerability: function(e){
		// console.log(JSON.stringify(e.latlng));
		// console.log(e.latlng.lat);
		// console.log(e.latlng.lng);

		var promise = $.ajax({
			url: "/api/vulnerabilities/" + e.latlng.lat + "," + e.latlng.lng
		});

		Q(promise)
			.then(function(data){
				console.log(data[0])
			})
			.catch(function(err){
				throw err;
			});
	}
});