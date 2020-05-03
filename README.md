# United States Airport Interactive Web Map

**Introduction**
>This is an interactive web map of all the airports in the United States. All airports are marked with icon on the map based on their coordinates. The icons <i class="fa fa-rss marker"></i> represent the airport has an air traffic control tower, and the other means no control tower. The basemap is presenting numbers of airports in each states with sequtial color ramp. The darker color means more amounts of airports. The map is zoomed with the center `[38.987682, -97.125537]` so that people can have a broad view of the U.S.. There are more features which will be explained in the following content.

***Below is a screenshot of the full map***

![](img/full.png)
![](img/zoom.png)

**Primary Functions**
- **_Overall Information_**
>When the airplane markers are clicked, you can see a popup of the overall information about that particular airport, like below. 

![](img/MarkerPopup.png)
 
- **_Airport Count Per State_**
>When the states are clicked, you can see the total airport count in that state, like below. 

![](img/Countpopup.png)

**Libraries Used**
>https://cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.min.js
>https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
>https://unpkg.com/leaflet@1.3.1/dist/leaflet.css
>https://unpkg.com/leaflet@1.4.0/dist/leaflet.js
>https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css
>https://fonts.googleapis.com/css?family=Titillium+Web
>https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.4/chroma.min.js

**Data Sources**
>airports.geojson _This data is converted from a shapefile_ has information about all the airports in the United States. 
[Data.gov](https://catalog.data.gov/dataset/usgs-small-scale-dataset-airports-of-the-united-states-201207-shapefile).
>us-states.geojson _This data is acquired from [Mike Bostock](https://bost.ocks.org/mike/) of [D3](https://d3js.org/)._ A geojson data file containing all the states' boundaries of the United States.

**Credit**
>attribution: 'Airports Data &copy; US Government | US States Boundaries &copy; Mike Bostock of D3 | Base Map &copy; CartoDB | Made By Sindhooja Mullapudi'


**Acknowledgment**
>Professor Bo Zhao|Geog 458|University of Washington
>Leaflet
>ajax.googlepis.com
>font-awesome
>Google
