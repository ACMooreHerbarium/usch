// added by Herrick Brown 2025-05-20
// OCCURRENCES  
	fetch('https://api.gbif.org/v1/occurrence/search?publishing_org=3124bdd8-b38c-46f0-b354-5e1d2c2cd9d2')
   .then(response => response.json())
   .then(occurrence => {document.getElementById("occur").innerHTML = occurrence.count + ' occurrences'})
   // lists number of occurrences for USCH


// DATASETS
	fetch('https://api.gbif.org/v1/dataset/search?publishing_org=3124bdd8-b38c-46f0-b354-5e1d2c2cd9d2')
   .then(response => response.json())
   .then(dataset => {document.getElementById("data").innerHTML = dataset.count + ' datasets'})
   // lists number of datasets for USCH


// CITATIONS 
	fetch('https://api.gbif.org/v1/literature/search?publishingOrganizationKey=3124bdd8-b38c-46f0-b354-5e1d2c2cd9d2')
   .then(response => response.json())
   .then(citation => {document.getElementById("cite").innerHTML = citation.count + ' citations'})
   // lists number of citations for USCH

// maps
// set up the map
map = new L.Map('map');

// create the base tile layer with correct attribution
var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {
  minZoom: 1, 
  maxZoom: 15, 
  attribution: osmAttrib
});		

map.setView(new L.LatLng(-20, -50), 3);
map.addLayer(osm);

// add the GBIF occurrence overlay
var gbifUrl='https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?&bin=hex&hexPerTile=117&style=classic.poly&srs=EPSG%3A3857&basisOfRecord=PRESERVED_SPECIMEN&publishingOrg=3124bdd8-b38c-46f0-b354-5e1d2c2cd9d2';
var gbifAttrib='<a href="https://www.gbif.org">GBIF</a>';

var gbifOverlay = L.tileLayer(gbifUrl, {
  minZoom: 1,
	maxZoom: 15,
  zoomOffset: -1,
  tileSize: 512,
  attribution: gbifAttrib
});

map.addLayer(gbifOverlay);