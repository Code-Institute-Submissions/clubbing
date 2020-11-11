var map;
var HILMA = {
    lat: 59.334591,
    lng: 18.063240
};
$(document).ready(function () {
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 6,
            center: HILMA
        });
        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        var  locations = [
            { 'name': 'Hilma', lat: 59.334591,lng: 18.063240},
            { 'name': 'Spy Bar', lat: 59.3365, lng:18.0721},
            { 'name': 'Sodra Teatern', lat: 59.3184, lng:18.0744},
            { 'name': 'Slakthuset', lat: 59.2917, lng:18.0793}

        ];
        var markers = locations.map(function (location, i) {
            return new google.maps.Marker({
                position: location,
                labels: labels[i % labels.length]
            });
        });

     
        
        var markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }
    initMap();
});