// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [41.850033, -87.6500523],
  zoom: 4
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// markerSize function
function markerSize(avg_attendance) {
  return avg_attendance * 3;
}

var cities = [{
  location: [39.8328, -75.3785],
  name: "Philadelphia ",
  avg_attendance: 17082,
  win_percent: "37%"

},
{
  location: [43.6332, -79.4186],
  name: "Toronto FC",
  avg_attendance: 25871,
  win_percent: "42"
},
{
  location: [40.0095, -82.9912],
  name: "Columbus",
  avg_attendance: 15370,
  win_percent: "37%"

},
{
  location: [28.5411, -81.3893],
  name: "Orlando City",
  avg_attendance: 27165,
  win_percent: "28%"

},
{
  location: [40.8296, -73.9262],
  name: "NYCFC",
  avg_attendance: 24570,
  win_percent: "44%"

},
{
  location: [40.7368, -74.1502],
  name: "NY Red Bulls",
  avg_attendance: 19561,
  win_percent: "49%"

},
// {
//   location: [36.1665, -86.7713],
//   name: "Nashville",
//   avg_attendance: "2,720,546"
// },
{
  location: [42.0909, -71.2643],
  name: "New England",
  avg_attendance: 18853,
  win_percent: "35%"

},
{
  location: [45.5623, -73.5530],
  name: "Montreal",
  avg_attendance: 18641,
  win_percent: "37%"

},
// {
//   location: [26.1955, -80.1614],
//   name: "Miami",
//   avg_attendance: "446,599"
// },
{
  location: [41.8623, -87.6167],
  name: "Chicago",
  avg_attendance: 15224,
  win_percent: "29%"

},
{
  location: [33.7555, -84.4010],
  name: "Atlanta",
  avg_attendance: 51237,
  win_percent: "53%"
},
{
  location: [38.8689, -77.0129],
  name: "D.C. United",
  avg_attendance: 17322,
  win_percent: "36%"

},
{
  location: [39.1312, -84.5162],
  name: "FC Cincinnati",
  avg_attendance: 27336,
  win_percent: "18%"

},
{
  location: [39.1216, -94.8232],
  name: "Sporting KC",
  avg_attendance: 19559,
  win_percent: "39%"

},
{
  location: [47.5952, -122.3316],
  name: "Seattle",
  avg_attendance: 37570,
  win_percent: "45%"


},
{
  location: [45.5215, -122.6918],
  name: "Portland",
  avg_attendance: 22408,
  win_percent: "42%"

},
{
  location: [44.9531, -93.1651],
  name: "Minnesota",
  avg_attendance: 21388,
  win_percent: "35%"

},
{
  location: [33.1543, -96.8352],
  name: "FC Dallas",
  avg_attendance: 16015,
  win_percent: "44%"

},
{
  location: [34.0126, -118.2841],
  name: "Los Angeles",
  avg_attendance: 22147,
  win_percent: "54%"

},
{
  location: [37.3512, -121.9247],
  name: "San Jose",
  avg_attendance: 19719,
  win_percent: "30%"

},
{
  location: [39.8056, -104.8918],
  name: "Colorado",
  avg_attendance: 15446,
  win_percent: "31%"

},
{
  location: [	49.246292, -123.116226],
  name: "Vancouver",
  avg_attendance: 20173,
  win_percent: "36%"

},
{
  location: [33.8644, -118.2611],
  name: "LA Galaxy",
  avg_attendance: 27857,
  win_percent: "37%"

},
{
  location: [40.5829, -111.8934],
  name: "Real Salt Lake",
  avg_attendance: 18991,
  win_percent: "39%"

},
{
  location: [29.7530, -95.3519],
  name: "Houston",
  avg_attendance: 18164,
  win_percent: "31%"

}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
// for (var i = 0; i < cities.length; i++) { // i++ increments value by 1
//   var city = cities[i];
//   L.marker(city.location)
//     .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Average Attendance " + city.avg_attendance + "</h3>")
//     .addTo(myMap);
//   L.circle(city[i].location, {
//       fillOpacity: 0.75,
//       color: "white",
//       fillColor: "blue",
//       radius: markerSize(city[i].avg_attendance)
//     }).bindPopup("<h1>" + city[i].name + "</h1> <hr> <h3>Population: " + city[i].avg_attendance + "</h3>").addTo(myMap);
// }

for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Average Attendance: " + city.avg_attendance +"</h1> <hr> <h3>Winning Percentage: " + city.win_percent )
    .addTo(myMap)
  ;}

for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.circle(city.location, {
    fillOpacity: 0.50,
    color: "white",
    fillColor: "blue",
    radius: markerSize(city.avg_attendance)
  }).bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Average Attendance: " + city.avg_attendance + "</h3>").
  addTo(myMap)
  }
