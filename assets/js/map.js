var map;
var stockholmLocation = {
    lat: 59.334591,
    lng: 18.063240
};

$(document).ready(function () {
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: stockholmLocation
        });
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var locations = [stockholmLocation];
        var markers = locations.map(function (location, i) {
            return new google.maps.Marker({
                position: location,
                labels: labels[i % labels.length]
            });
        });
        var markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
    }
    
    initMap();
});
