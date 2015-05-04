var MapIV = Mn.ItemView.extend({
    template: "map/templates/map.html",

    initialize: function() {
        this.initializeTileProviders();
/*
        var geocoder = new google.maps.Geocoder();

        debugger;
        geocoder.geocode({
            'address': "campo grande, lisboa, portugal"
        }, function(results, status) {

            debugger;

            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    draggable: false
                });




                var temp = document.getElementById("geolocation").value;
                //var street=results[0].adddress_components[1].short_name;
                //var number=results[0].adddress_components[0].short_name;
                //var locality=results[0].adddress_components[2].short_name;
                //var cp4=results[0].adddress_components[8].short_name;
                //var municipality=results[0].adddress_components[4].short_name;
                //var district=results[0].adddress_components[5].short_name;
                //var country=results[0].adddress_components[6].short_name;
                temp = temp + results[0].geometry.location_type + "; " + results[0].formatted_address + " ; " + results[0].geometry.location.lat() + " ; " + results[0].geometry.location.lng() + "\n";
                document.getElementById("geolocation").value = temp;

                markersArray.push(marker);

            }

            //else {
            //alert("Não foi possível georreferenciar a sua morada. Experimente novamente.");
            //}

        });
*/
    },

    initializeTileProviders: function() {
        var mapboxAccessToken = "pk.eyJ1IjoicGF1bG9zYW50b3N2aWVpcmEiLCJhIjoidWlIaGRJayJ9.xDEbXL8LPTO0gJW-NBN8eg";

        this.tileProviders = {

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
                    "BGRIBordersOnly": L.tileLayer('http://localhost:8001/v2/bgri_lisboa_borders_only/{z}/{x}/{y}.png', {
                        maxZoom: 16
                    }),

                    "BGRIVuln": L.tileLayer('http://localhost:8001/v2/bgri_lisboa/{z}/{x}/{y}.png', {
                        maxZoom: 16
                    }),

                    "cirac_vul_bgri_FVI_N": L.tileLayer('http://localhost:8001/v2/cirac_vul_bgri_FVI_N/{z}/{x}/{y}.png', {
                        maxZoom: 16
                    })
                }
            },

            this.groupedOverlays = {
                "Mapa base": {
                    //"Ruas": this.tileProviders["streets"]["Esri.WorldStreetMap"],
                    "Ruas": this.tileProviders["streets"]["MapQuestOpen.OSM"],
                    "Satélite": this.tileProviders["satellite"]['HERE.satelliteDay'], // maxZoom: 19
                    "Vulnerabilidades (normal)": this.tileProviders["cirac"]["BGRIVuln"],
                    "Vulnerabilidades2 (normal)": this.tileProviders["cirac"]["cirac_vul_bgri_FVI_N"]
                },

                "BGRI": {
                    "Delimitação": this.tileProviders["cirac"]["BGRIBordersOnly"], // maxZoom: 16
                },



                // "Satellite": {
                //     "Esri World Imagery": this.tileProviders["satellite"]["Esri.WorldImagery"], // maxZoom: 13
                //     "HERE satellite Day": this.tileProviders["satellite"]['HERE.satelliteDay'] // maxZoom: 19
                // }

            };

    },

    onAttach: function() {

        this.initializeMap();
        //this.addTileLayer("base", "Hydda.Base");
        this.addTileLayer("streets", "MapQuestOpen.OSM");
        this.addVulnLegend();
        this.addGeocoderControl();
        this.registerMapEvents();

    },

    addGeocoderControl: function(){
        var geocoderOptions = {
            placeholder: "Procurar morada",
            errorMessage: "Morada desconhecida",
            geocoder: L.Control.Geocoder.bing('AoArA0sD6eBGZyt5PluxhuN7N7X1vloSEIhzaKVkBBGL37akEVbrr0wn17hoYAMy'),
            collapsed: "true",
        };

        var geocoder = L.Control.geocoder(geocoderOptions).addTo(this.map);

        geocoder.markGeocode = function(result) {
            this._map.fitBounds(result.bbox);

            if (this._geocodeMarker) {
                this._map.removeLayer(this._geocodeMarker);
            }

            this._geocodeMarker = new L.Marker(result.center)
                .bindPopup(result.html || result.name)
                .addTo(this._map)
                .openPopup();

            console.log("TODO: in the markGeocode callback, get the vulnerability of the point. Result: ", result);

            return this;
        };
    },

    addVulnLegend: function() {
        function getColor(vuln) {
            return vuln == 3 ? '#1a9850' :
                vuln == 4 ? '#66bd63' :
                vuln == 5 ? '#a6d96a' :
                vuln == 6 ? '#d9ef8b' :
                vuln == 7 ? '#fee08b' :
                vuln == 8 ? '#fdae61' :
                vuln == 9 ? '#f46d43' :
                '#d73027';
        };

        var LegendControl = L.Control.extend({

            options: {
                position: 'bottomright'
            },

            onAdd: function(map) {

                var div = L.DomUtil.create('div', 'info legend'),
                    vuln = [3, 4, 5, 6, 7, 8, 9, 10];

                div.innerHTML = '<div style="margin-bottom: 5px; font-weight: 700;">Vulnerabilidade</div>';

                for (var i = 0; i < vuln.length; i++) {

                    div.innerHTML +=
                        '<div style="margin-bottom: 2px;"><i style="background:' + getColor(vuln[i]) + '"></i>&nbsp;' +
                        vuln[i] + '&nbsp;<div>';
                }

                return div;
            }
        });

        this.map.addControl(new LegendControl());
    },

    initializeMap: function() {
        this.map = L.map('map', {
            center: [38.75, -9.15],
            zoom: 10,
            maxZoom: 16,
            minZoom: 8,
            layers: [this.groupedOverlays["Mapa base"]["Ruas"]]
        });
    },

    addTileLayer: function(tileCategory, tileName) {

        //this.tileProviders[tileCategory][tileName].addTo(this.map);

        // L.tileLayer('http://localhost:8001/v2/bgri_lisboa_borders_only/{z}/{x}/{y}.png', {
        //     maxZoom: 16
        // }).addTo(this.map);

        L.control.groupedLayers(undefined, this.groupedOverlays, {
            exclusiveGroups: ["Mapa base", "Vulnerabilidades"],
            collapsed: true
        }).addTo(this.map);
    },

    registerMapEvents: function() {

        this.map.on('click', function getVulnerability(e) {

            var promise = $.ajax({
                url: "/api/vulnerabilities/" + e.latlng.lat + "," + e.latlng.lng
            });

            Q(promise)
                .then(function(data) {
                    console.log(data[0])
                })
                .catch(function(err) {
                    throw err;
                });
        });
    },


});
