/*
Template Name: Dashonic - Admin & Dashboard Template
Author: Pichforest
Website: https://Pichforest.com/
Contact: Pichforest@gmail.com
File: Vector Maps init Js File
*/


// world map with markers

var worldemapmarkers = new jsVectorMap({
	map: 'world_merc',
	selector: '#world-map-markers',
	zoomOnScroll: false,
	zoomButtons: false,
	selectedMarkers: [0, 2],
	markersSelectable: true,
	markers:[
	  { name: "Palestine", coords: [31.9474,35.2272] },
	  { name: "Russia", coords: [61.524,105.3188] },
	  { name: "Canada", coords: [56.1304,-106.3468] },
	  { name: "Greenland", coords: [71.7069,-42.6043] },
	],
	markerStyle:{
	  initial: { fill: "#038edc" },
	  selected: { fill: "red" }
	},
	labels: {
	  	markers: {
			render: function(marker){
				return marker.name
			}
	  	}
	}
})


