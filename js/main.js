//1. Create  map object.
var mymap = L.map('map', {
    center: [43, -100],
    zoom: 4,
    maxZoom: 10,
    minZoom: 3,
    detectRetina: true});

//2. Add a base map.
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

//3. Add all airport data to the map
var airports = null;

//4. Add color
var colors = chroma.scale('dark2').mode('lch').colors(2);

//5. Append style to the page

for (i = 0; i < 2; i++) {
     $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}

airports = L.geoJson.ajax("assets/airports.geojson",{
  onEachFeature: function (feature, layer) {
    layer.bindpopup(feature.properties.AIRPT_NAME + feature.properties.TOT_ENP);
  },

  pointToLayer: function (feature, latlng) {
    var id = 0;
    if (feature.properties.CNTL_TWR == "Y") { id = 0; }
    else { id = 1; }
    return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-plane marker-color-' + (id + 1).toString() })});
  },
  attribution: 'Airports Data &copy; US Government | US States Boundaries &copy; Mike Bostock of D3 | Base Map &copy; CartoDB | Made By Sindhooja Mullapudi'
}).addTo(mymap);

//6. Set colors
colors = chroma.scale('YlOrRd').colors(6);

function setColor(density) {
    var id = 0;
    if (density > 50) { id = 5; }
    else if (density > 40 && density <= 50) { id = 4; }
    else if (density > 30 && density <= 40) { id = 3; }
    else if (density > 20 && density <= 30) { id = 2; }
    else if (density > 10 && density <= 20) { id = 1; }
    else  { id = 0; }
    return colors[id];
}

//Set style
function style(feature) {
    return {
        fillColor: setColor(feature.properties.count),
        fillOpacity: 0.6,
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '4'
    };
}

//8. Add states
states = L.geoJson.ajax("assets/us-states.geojson", {
  onEachFeature: onEachFeature,
  style: style
}).addTo(mymap);

//9. Interactive elements
function onEachFeature(feature, layer){
  layer.bindPopup(feature.properties.name + feature.properties.count);
  layer.on({
    click : onStateClick,
    mouseover : onStateHighlight,
    mouseout : onStateMouseOut
  });
}

//10. Create, run, and add legend

var legend = L.control({position: 'topright'});

legend.onAdd = function() {
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b> Airport Count</b><br/>';
    div.innerHTML += '<i style="background: ' + colors[5] + '; opacity: 0.5"></i><p>50+</p>';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p>40-50</p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p>30-40</p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p>20-30</p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p>10-20</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p>>10</p>';
    div.innerHTML += '<hr><b>Air Traffic Control Presence</b><br/>';
    div.innerHTML += '<i class="fa fa-plane marker-color-1"></i><p> PRESENT</p>';
    div.innerHTML += '<i class="fa fa-plane marker-color-2"></i><p> ABSENT</p>';
    return div;
};

legend.addTo(mymap);

//11. Add scale

L.control.scale({position: 'bottomleft'}).addTo(mymap);
