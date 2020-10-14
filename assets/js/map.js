   function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 59.334591,
            lng: 18.063240
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
       { lat: 59.3358, lng: 18.05076},
    ];
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            labels: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
  