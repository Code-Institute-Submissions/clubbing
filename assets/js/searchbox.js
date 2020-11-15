function createMap() {


    let coords = {"lat": 53.3493, "lng": -6.261};

    map = new google.maps.Map(document.getElementById("map"), {
        center:coords,
        zoom: 18,
        disableDefaultUI: true
    });
    marker = new google.maps.Marker({
        position:coords,
        animation: google.maps.Animation.DROP,
        map:map,
        label: {
            text: "Dublin GPO",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
        }
    });
}

const input = document.getElementById("search-input");
const searchBox = new google.maps.places.SearchBox(input);

map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
});



searchBox.addListener("places_changed", function () {
    let places = searchBox.getPlaces();
    if (places.length == 0) {
        return;
    }

    for(result of places)
    console.log(result);
});
createMap();