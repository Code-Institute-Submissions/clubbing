// Stockholm 
const initialLocation = {
    lat: 59.334591,
    lng: 18.063240
};
var map;
var autocomplete;
var infowindow;
var infowindowContent;
var mapPlaceMarker;
var service;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: initialLocation,
        zoom: 13,
    });

    const input = document.getElementById("pac-input");
    autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);

    // Specify just the place data fields that you need.
    autocomplete.setFields(["place_id", "geometry", "name", "opening_hours/weekday_text", "formatted_address"]);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    infowindow = new google.maps.InfoWindow();
    infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);

    mapPlaceMarker = new google.maps.Marker({
        map: map
    });
    mapPlaceMarker.addListener("click", () => {
        infowindow.open(map, marker);
    });

    // Places API service
    service = new google.maps.places.PlacesService(map);

    autocomplete.addListener("place_changed", autocompleteCallback);
}

/* 
Searches the place which is on the map for clubs
*/
function searchPlace(location) {
    var service = new google.maps.places.PlacesService(map);
    var request = {
        location: location,
        radius: '500',
        type: ['night_club']
    };

    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarkersAndUpdateHTML(results, map);
    }
}

function createMarkersAndUpdateHTML(places, map) {
    const bounds = new google.maps.LatLngBounds();
    for (let i = 0, place;
        (place = places[i]); i++) {
        const image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25),
        };
        marker = new google.maps.Marker({
            map,
            icon: image,
            title: place.name,
            position: place.geometry.location,
        });
        
        // Add callback to the marker here
        
        bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds);
}


function autocompleteCallback() {
    infowindow.close();
    const place = autocomplete.getPlace();

    if (!place.geometry) {
        return;
    }

    if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
    } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
    }
    // Set the position of the marker using the place ID and location.
    mapPlaceMarker.setPlace({
        placeId: place.place_id,
        location: place.geometry.location,
    });
    mapPlaceMarker.setVisible(true);
    infowindowContent.children.namedItem("place-name").textContent =
        place.name;
    infowindowContent.children.namedItem("place-id").textContent =
        place.place_id;
    infowindowContent.children.namedItem("place-address").textContent =
        place.formatted_address;
    infowindow.open(map, mapPlaceMarker);

    // Call the places API to search the vicinity for clubs
    searchPlace(place.geometry.location);
}

function createPhotoMarker(place) {
    var photos = place.photos;
    if (!photos) {
        return;
    }

    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: photos[0].getUrl({
            maxWidth: 35,
            maxHeight: 35
        })
    });
}
