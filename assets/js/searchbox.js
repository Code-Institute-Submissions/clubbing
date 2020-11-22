var map;
var coords = {
    "lat": 59.334591,
    "lng": 18.063240
};

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function createMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 18,
        disableDefaultUI: true
    });
    marker = new google.maps.Marker({
        position: coords,
        animation: google.maps.Animation.DROP,
        map: map,
        label: {
            text: "Spy Bar",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
        }
    });
    
var request = {
        placeId: generalPlaceInfo.placeId,
        fields: ['name', 'geometry', 'opening_hours']
    };
    var service = new google.maps.places.PlacesService(map);

	  service.findPlaceFromQuery(request, function(results, status) {
		 if (status === google.maps.places.PlacesServiceStatus.OK) {
             for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
             }
             map.setCenter(results[0].geometry.location);
                }
                service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);
  });
}

function googlePlacesAPI(){
    settings = {
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        type: 'GET',
        dataType: 'json',
        data: {
              'type': 'night_club',
            'radius': 1500,
            'location': '-33.8670522,151.1957362',
            'key': 'AIzaSyA727QkFrjWhzr_hxqcxtuRE3XR0lLMWDQ',
        },
    }

    req = $.ajax(settings);
    req.done(function(data) {
        console.info(data);
    });
}

$(document).ready(function () {
    var input = document.getElementById("autocomplete");
    var searchBox = new google.maps.places.SearchBox(input);

    createMap();

    //    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    //    map.addListener("bounds_changed", function () {
    //        searchBox.setBounds(map.getBounds());
    //    });
    
//    const request = {
//        query: "",
//        radius: 5000,
//        location: new google.maps.LatLng(-34.397, 150.644),
//        type: 'night_club',
//    };
//    service = new google.maps.places.PlacesService(map);
//    service.search(request, (results, status) => {
//        console.log(results);
//    });
//
//
//    service.findPlaceFromQuery(request, (results, status) => {
//        if (status === google.maps.places.PlacesServiceStatus.OK) {
//            for (let i = 0; i < results.length; i++) {
//                createMarker(results[i]);
//            }
//            map.setCenter(results[0].geometry.location);
//        }
//    });





    searchBox.addListener("places_changed", function () {
        let places = searchBox.getPlaces();

        //        service --> places
        //        request = {
        //            'radius': 5000,
        //            'type': 'nigh_club',
        //        }
        //        places = service.getPlaces(request)

        if (places.length == 0) {
            return;
        }

        places.forEach(function (result) {
            console.log(result);
        })
    });
});
