var mapboxAccessToken = "pk.eyJ1IjoicGF1bG9zYW50b3N2aWVpcmEiLCJhIjoidWlIaGRJayJ9.xDEbXL8LPTO0gJW-NBN8eg";

var tileProviders = {

    base: {
        "Hydda.Base": L.tileLayer.provider('Hydda.Base'), // maxZoom: 18
        "Esri.WorldShadedRelief": L.tileLayer.provider('Esri.WorldShadedRelief'), // maxZoom: 13
        "OpenMapSurfer.Grayscale": L.tileLayer.provider('OpenMapSurfer.Grayscale'),
    },

    rivers: {
        "Esri.WorldGrayCanvas": L.tileLayer.provider('Esri.WorldGrayCanvas'), // maxZoom: 16
        "Esri.WorldTopoMap": L.tileLayer.provider('Esri.WorldTopoMap'),
    },

    streets: {
        "Esri.WorldStreetMap": L.tileLayer.provider('Esri.WorldStreetMap'),
        "MapQuestOpen.OSM": L.tileLayer.provider('MapQuestOpen.OSM'),
        "HERE.normalDayGrey": L.tileLayer.provider('HERE.normalDayGrey', {
            'app_id': 'Y8m9dK2brESDPGJPdrvs',
            'app_code': 'dq2MYIvjAotR8tHvY8Q_Dg'
        }),
    },

    terrain: {
        "Mapbox.Emerald": L.tileLayer('https://{s}.tiles.mapbox.com/v4/examples.map-i87786ca/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
            maxZoom: 18,
            id: 'paulosantosvieira.l4h4omm9'
        }),
        "Esri.DeLorme": L.tileLayer.provider('Esri.DeLorme'), // maxZoom: 11
        "Acetate.hillshading": L.tileLayer.provider('Acetate.hillshading'),
        "Thunderforest.Outdoors": L.tileLayer.provider('Thunderforest.Outdoors'),
        "HERE.terrainDay": L.tileLayer.provider('HERE.terrainDay', {
            'app_id': 'Y8m9dK2brESDPGJPdrvs',
            'app_code': 'dq2MYIvjAotR8tHvY8Q_Dg'
        }),
    },

    satellite: {
        "MapQuestOpen.Aerial": L.tileLayer.provider('MapQuestOpen.Aerial'), // maxZoom: 11
        "Esri.WorldImagery": L.tileLayer.provider('Esri.WorldImagery'), // maxZoom: 13
        "HERE.satelliteDay": L.tileLayer.provider('HERE.satelliteDay', {
            'app_id': 'Y8m9dK2brESDPGJPdrvs',
            'app_code': 'dq2MYIvjAotR8tHvY8Q_Dg'
        }), // maxZoom: 19
    },

    cirac: {
        "BGRIBordersOnly": L.tileLayer('http://localhost:8001/v2/cirac_brgi_borders/{z}/{x}/{y}.png', {
            maxZoom: 16
        }),

        "cirac_vul_bgri_FVI_N": L.tileLayer('http://localhost:8001/v2/cirac_vul_bgri_FVI_N/{z}/{x}/{y}.png', {
            maxZoom: 16
        }),

        "cirac_vul_bgri_FVI_75": L.tileLayer('http://localhost:8001/v2/cirac_vul_bgri_FVI_75/{z}/{x}/{y}.png', {
            maxZoom: 16
        }),

        "cirac_vul_bgri_cfvi": L.tileLayer('http://localhost:8001/v2/cirac_vul_bgri_cfvi/{z}/{x}/{y}.png', {
            maxZoom: 16
        }),

        "cirac_vul_bgri_cfvi75": L.tileLayer('http://localhost:8001/v2/cirac_vul_bgri_cfvi75/{z}/{x}/{y}.png', {
            maxZoom: 16
        })
    }

};

var overlays = {
    "Mapa base": {
        //"Ruas": this.tileProviders["streets"]["Esri.WorldStreetMap"],
        "Ruas": tileProviders["streets"]["MapQuestOpen.OSM"],
        "Satélite": tileProviders["satellite"]['HERE.satelliteDay'], // maxZoom: 19
        "Vulnerabilidades (normal)": tileProviders["cirac"]["BGRIVuln"],
        "Vulnerabilidades2 (normal)": tileProviders["cirac"]["cirac_vul_bgri_FVI_N"]
    },

    "BGRI": {
        "Delimitação": tileProviders["cirac"]["BGRIBordersOnly"], // maxZoom: 16
    }
};


// create an instance of a backbone model
var myModel = new Backbone.Model({
    now: Date.now()
});

var MyView = Mn.ItemView.extend({
    className: "info",

    template: "map/templates/my-view.html",

    modelEvents: {
        "change": "render"
    },

    triggers: {
        "click .title": "title:clicked"
    },

    onTitleClicked: function(){
        this.model.set("now", Date.now());
    }
});



var MainControlLV = Mn.LayoutView.extend({

    className: "main-control",
    //template: _.template("<h1 class='title'>The control title was clicked</h1><span>The time is <%= now %></span>"),
    template: "map/templates/main-control.html",

    initialize: function(){
    },
    // triggers: {
    //     "click .title": "control:clicked"
    // },
    // onControlClicked: function(){
    //     this.model.set("now", Date.now());
    // }

    events: {
        "click .glyphicon-menu-hamburger": "toggleMenu",
        "dblclick .glyphicon-menu-hamburger": "stopPropagation"
    },

    regions: {
        controlMainRegion: "#control-main-region"
    },

    stopPropagation: function(e){
        e.stopPropagation();
    },

    toggleMenu: function(e){
//debugger;
        e.stopPropagation();
        console.log("toggle");
//debugger;
        var menuIsOpen = this.controlMainRegion.hasView()

        if(menuIsOpen){
            this.closeMenu();
        }
        else{
            this.openMenu();
        }
    },

    openMenu: function(){
//        debugger;

        var myView = new MyView({
            model: myModel
        });

        this.controlMainRegion.show(myView);
    },

    closeMenu: function(){
//        debugger;
        this.controlMainRegion.reset();
    }
});

var mainControlLV = new MainControlLV({});
mainControlLV.render();

var MapIV = Mn.ItemView.extend({
    template: "map/templates/map.html",

    initialize: function() {
    },

    onAttach: function() {

        this.initializeMap();
        //this.addTileLayer("base", "Hydda.Base");
        this.addTileLayer("streets", "MapQuestOpen.OSM");
        this.initializeVulnLegend();
        this.addGeocoderControl();
        this.registerMapEvents();

    },

    addGeocoderControl: function(){
        var geocoderOptions = {
            placeholder: "Procurar morada",
            errorMessage: "Morada desconhecida",
            geocoder: L.Control.Geocoder.bing('AoArA0sD6eBGZyt5PluxhuN7N7X1vloSEIhzaKVkBBGL37akEVbrr0wn17hoYAMy'),
            //geocoder: L.Control.Geocoder.google('AIzaSyBoM_J6Ysno6znvigDm3MYja829lAeVupM'),
            
            collapsed: "true",
        };

        var geocoder = L.Control.geocoder(geocoderOptions).addTo(this.map);
        var view = this;

        geocoder.markGeocode = function(result) {

            var promise;

            if(view.hasVulnMap()){
                promise = $.ajax({
                    url: "/api/vulnerabilities/" + result.center.lat + "," + result.center.lng + "?map=" + view.getCurrentMapTable()
                });
            }


            Q(promise)
                .then(function(data) {

                    if(!data){
                        data = [{value: undefined}];
                    }

                    view.map.fitBounds(result.bbox);

                    if (view._geocodeMarker) {
                        view.map.removeLayer(view._geocodeMarker);
                    }

                    view._geocodeMarker = new L.Marker(result.center)
                        //.bindPopup(result.name + " <br><br> Vulnerabilidade: " + data[0].value)
                        .bindPopup(view.getPopupMessage(data[0].value, result.name))
                        .addTo(view.map)
                        .openPopup();

                    //console.log("TODO: in the markGeocode callback, get the vulnerability of the point. Result: ", result);

                })
                .catch(function(err) {
                    throw err;
                });

            return this;
        };
    },

    hasVulnMap: function(){

        if(
            this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_FVI_N"])  ||
            this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_FVI_75"]) || 
            this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_cfvi"])   ||
            this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_cfvi75"])
        ){
            return true;
        }

        return false;
    },

    getCurrentMapTable: function(){
        var mapTable = "";
        if(this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_FVI_N"])){
            mapTable = "cirac_vul_bgri_fvi_n";
        }
        else if(this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_FVI_75"])){
            mapTable = "cirac_vul_bgri_fvi_75";
        }
        else if(this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_cfvi"])){
            mapTable = "cirac_vul_bgri_cfvi";
        }
        else if(this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_cfvi75"])){
            mapTable = "cirac_vul_bgri_cfvi75";
        }
        else{
            alert("ERROR: the selected vulnerability map is unknown");
        }

        return mapTable;
    },

    getPopupMessage: function(value, locationName){
        //return " <br><br> xxVulnerabilidade: " + value;
        //debugger;
        // if the selected map if the normal 
        var message = "";
        if(this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_FVI_N"])){
            message += "<h5>Normal FVI (mode)</h5>";

            if(locationName){
                message += "<div><b>Location:</b> " + locationName + "</div>";
            }

            message += "<div><b>Vulnerability:</b> " + value + " (" + this.getNormalFVIDescription(value, true) + ")</div>";

            message += "<div><b>Description:</b> " + this.getNormalFVIDescription(value) + "</div>";
        }

        else if(this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_FVI_75"])){
            message += "<h5>Normal FVI (75 percentile)</h5>";

            if(locationName){
                message += "<div><b>Location:</b> " + locationName + "</div>";
            }

            message += "<div><b>Vulnerability:</b> " + value + " (" + this.getNormalFVIDescription(value, true) + ")</div>";

            message += "<div><b>Description:</b> " + this.getNormalFVIDescription(value) + "</div>";
        }

        else if(this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_cfvi"])){
            message += "<h5>Combined FVI (mode)</h5>";

            if(locationName){
                message += "<div><b>Location:</b> " + locationName + "</div>";
            }

            message += "<div><b>Vulnerability:</b> " + value + "</div>";

            message += "<div><b>Description:</b> " + this.getCombinedFVIDescription(value) + "</div>";
        }

        else if(this.map.hasLayer(tileProviders["cirac"]["cirac_vul_bgri_cfvi75"])){
            message += "<h5>Combined FVI (75 percentile)</h5>";

            if(locationName){
                message += "<div><b>Location:</b> " + locationName + "</div>";
            }

            message += "<div><b>Vulnerability:</b> " + value + "</div>";

            message += "<div><b>Description:</b> " + this.getCombinedFVIDescription(value) + "</div>";
        }
        else{
            if(locationName){
                message += "<div><b>Location:</b> " + locationName + "</div>";
            }
        }
        return message;
    },

    getNormalFVIDescription: function(value, shortDescription){
        var message = "";
        if(value >= 3 && value <= 5){        
            message = shortDescription ? 
                "baixo" : 
                "Áreas improváveis de ter inundações (E, PSI) e onde as comunidades são menos suscetíveis (SSI).";
        }
        else if(value >= 6 && value <= 7){  
            message =  shortDescription ? 
                "moderado" : 
                "Áreas improváveis de sofrer danos durante ocorrências de inundações (E, PSI) e onde as comunidades tendem a ser menos suscetíveis (SSI).";
        }
        else if(value >= 8 && value <= 10){  
            message = shortDescription ? 
                "elevado" :
                "Áreas suscetíveis de sofrer danos durante ocorrências de inundações (E, PSI) e com comunidades suscetíveis (SSI).";
        }
        else if(value >= 11 && value <= 12){ 
            message = shortDescription ? 
                "muito elevado" :
                "Áreas muito suscetíveis de sofrer danos durante ocorrências de inundações (E, PSI) e com comunidades suscetíveis (SSI).";
        }

        return message;
    },

    getCombinedFVIDescription: function(value, shortDescription){
        var message = "";
        if(value == 1){        
            message = shortDescription ? 
                "" : 
                "Baixa Susceptibilidade Física, Exposição e Precipitação";
        }
        if(value == 2){
            message = shortDescription ? 
                "" : 
                "Baixa Susceptibilidade Física e Precipitação, elevada Exposição";
        }
        if(value == 3){
            message = shortDescription ? 
                "" : 
                "Baixa Susceptibilidade Física e Exposição, elevada Precipitação";
        }
        if(value == 4){
            message = shortDescription ? 
                "" : 
                "Baixa Susceptibilidade Física, elevada Exposição e Precipitação";
        }
        if(value == 5){
            message = shortDescription ? 
                "" : 
                "Elevada Susceptibilidade Física, baixa Exposição e Precipitação";
        }
        if(value == 6){
            message = shortDescription ? 
                "" : 
                "Elevada Susceptibilidade Física e Exposição, baixa Precipitação";
        }
        if(value == 7){
            message = shortDescription ? 
                "" : 
                "Elevada Susceptibilidade Física e Precipitação, baixa Exposição";
        }
        if(value == 8){
            message = shortDescription ? 
                "" : 
                "Elevada Susceptibilidade Física, Exposição e Precipitação";
        }

        return message;
    },


    initializeVulnLegend: function() {

        // legend control for normal FVI

        function getFVINormalColors(value) {
            var color = "#FFF";

            if(value >= 3 && value <= 5){        color = "#38A800"; }
            else if(value >= 6 && value <= 7){   color = "#FFFF00"; }
            else if(value >= 8 && value <= 10){  color = "#FF9500"; }
            else if(value >= 11 && value <= 12){ color = "#FF0000"; }

            return color;
        };

        var FVINormalLegendControl = L.Control.extend({

            options: {
                position: 'bottomright'
            },

            onAdd: function(map) {

                var div = L.DomUtil.create('div', 'info legend'),
                    vuln = [3, 6, 8, 11, 13];

                div.innerHTML = '<div style="margin-bottom: 5px; font-weight: 700;">FVI (normal)</div>';

                for (var i = 0; i < vuln.length-1; i++) {

                    div.innerHTML +=
                        '<div style="margin-bottom: 2px;"><i style="background:' + getFVINormalColors(vuln[i]) + '"></i>&nbsp;' +
                        vuln[i] + '-' + (vuln[i+1]-1) +  '&nbsp;<div>';
                }

                return div;
            }
        });

        this.fviNormalLegendControl = new FVINormalLegendControl();


        // legend control for combined FVI

        function getFVICombinedColors(value) {
            var color = "#FFF";

            if(value == 1){      color = "#38A800"; }
            else if(value == 2){ color = "#66BF00"; }
            else if(value == 3){ color = "#9BD900"; }
            else if(value == 4){ color = "#DEF200"; }
            else if(value == 5){ color = "#FFDD00"; }
            else if(value == 6){ color = "#FF9100"; }
            else if(value == 7){ color = "#FF4800"; }
            else if(value == 8){ color = "#FF0000"; }

            return color;
        };

        var FVICombinedLegendControl = L.Control.extend({

            options: {
                position: 'bottomright'
            },

            onAdd: function(map) {

                var div = L.DomUtil.create('div', 'info legend'),
                    vuln = [1, 2, 3, 4, 5, 6, 7, 8];

                div.innerHTML = '<div style="margin-bottom: 5px; font-weight: 700;">FVI (combined)</div>';

                for (var i = 0; i < vuln.length; i++) {

                    div.innerHTML +=
                        '<div style="margin-bottom: 2px;"><i style="background:' + getFVICombinedColors(vuln[i]) + '"></i>&nbsp;' +
                        vuln[i] +  '&nbsp;<div>';
                }

                return div;
            }
        });

        this.fviCombinedLegendControl = new FVICombinedLegendControl();
    },

    initializeMap: function() {

        this.map = L.map('map', {
            center: [38.75, -9.15],
            zoomControl: false,
            attributionControl: false,
            zoom: 10,
            maxZoom: 16,
            minZoom: 8,
            layers: [overlays["Mapa base"]["Ruas"]]
        });


        // add the zoom control manually
        var zoomControl = L.control.zoom({
            position: "topright"
        });
        this.map.addControl(zoomControl);


        // add the scale control
        var scaleControl = L.control.scale({
            position: "bottomright",
            imperial: false,
            maxWidth: 130
        });
        this.map.addControl(scaleControl);


        // add the main control
        var mainControl = new L.Control.BackboneView({
            view: mainControlLV,
            position: "topleft"
        });
        this.map.addControl(mainControl);

    },

    addTileLayer: function(tileCategory, tileName) {

        //tileProviders[tileCategory][tileName].addTo(this.map);

        // L.tileLayer('http://localhost:8001/v2/bgri_lisboa_borders_only/{z}/{x}/{y}.png', {
        //     maxZoom: 16
        // }).addTo(this.map);

        // L.control.groupedLayers(undefined, this.overlays, {
        //     exclusiveGroups: ["Mapa base", "Vulnerabilidades"],
        //     collapsed: true
        // }).addTo(this.map);

        var baseMaps = [
                { 
                    groupName : "Street maps",
                    expanded: false,
                    layers: {
                        "Mapquest Open": tileProviders["streets"]["MapQuestOpen.OSM"],
                        "HERE Day Grey": tileProviders["streets"]["HERE.normalDayGrey"],
                        "HERE Satellite": tileProviders["satellite"]["HERE.satelliteDay"]
                    }
                },
                { 
                    groupName : "Flood Vulnerability Index",
                    expanded: false,
                    layers: {
                        "Flood Vulnerability Index by BGRI (mode)": tileProviders["cirac"]["cirac_vul_bgri_FVI_N"],
                        "Flood Vulnerability Index by BGRI (75 percentile)": tileProviders["cirac"]["cirac_vul_bgri_FVI_75"]
                    }
                },
                { 
                    groupName : "Combined Flood Vulnerability Index",
                    expanded: false,
                    layers: {
                        "Combined Flood Vulnerability Index by BGRI (mode)": tileProviders["cirac"]["cirac_vul_bgri_cfvi"],
                        "Combined Flood Vulnerability Index by BGRI (75 percentile)": tileProviders["cirac"]["cirac_vul_bgri_cfvi75"]
                    }
                }
        ];

        var overlays = [
                 {
                    groupName : "Other layers",
                    expanded  : false,
                    layers    : { 
                        "BGRI boundary" : tileProviders["cirac"]["BGRIBordersOnly"]
                    }   
                 }
        ];

        var options = {
            container_width     : "350px",
            container_maxHeight : "350px", 
            group_maxHeight     : "110px",
            exclusive           : false,
            position: "topleft",
            collapsed: false
        };

        var layerControl = L.Control.styledLayerControl(baseMaps, overlays, options);
        this.map.addControl(layerControl);

    },

    registerMapEvents: function() {

        var view = this;
        this.map.on('click', function getVulnerability(e) {

            if(!view.hasVulnMap()){
                return;
            }

            var promise = $.ajax({
                url: "/api/vulnerabilities/" + e.latlng.lat + "," + e.latlng.lng + "?map=" + view.getCurrentMapTable()
            });


            Q(promise)
                .then(function(data) {
//                    console.log(data[0])

                    if (view._geocodeMarker) {
                        view.map.removeLayer(view._geocodeMarker);
                    }

                    view._geocodeMarker = new L.Marker([e.latlng.lat, e.latlng.lng])
                        //.bindPopup("Vulnerabilidade: " + data[0].value)
                        .bindPopup(view.getPopupMessage(data[0].value))
                        .addTo(view.map)
                        .openPopup();
                })
                .catch(function(err) {
                    throw err;
                });
        });

        this.map.on("baselayerchange", function(e){
            var tilesUrl = e.layer._url.toLowerCase();

            if(view.currentLegendControl){
                view.map.removeControl(view.currentLegendControl);
            }

            // normal FVI - show the corresponding legend control
            if(tilesUrl.indexOf("cirac_vul_bgri_fvi_n/{z}/{x}/{y}.png") > 0 ||
                tilesUrl.indexOf("cirac_vul_bgri_fvi_75/{z}/{x}/{y}.png") > 0){

                view.currentLegendControl = view.fviNormalLegendControl;
                
            }

            // combined FVI - show the corresponding legend control
            else if(tilesUrl.indexOf("cirac_vul_bgri_cfvi/{z}/{x}/{y}.png") > 0 ||
                tilesUrl.indexOf("cirac_vul_bgri_cfvi75/{z}/{x}/{y}.png") > 0){

                view.currentLegendControl = view.fviCombinedLegendControl;
            }
            else{
                console.log("street");   
                view.currentLegendControl = undefined;
            }

            // update the legend control (if not undefined)
            if(view.currentLegendControl){
                view.map.addControl(view.currentLegendControl);
            }


        });
    },


});
