var map;
var Sodra = {
     lat: 59.3184, lng:18.0744,               
};
var Hilma = {
    lat: 59.334591,lng: 18.063240
}


function createMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: Sodra,
        zoom: 18,
        
    });
    marker = new google.maps.Marker({
        position: Sodra,
        animation: google.maps.Animation.DROP,
        map: map,
        label: {
            text: "Sodra Teatern",
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
        }
        
    });

    //marker clusters//
   

//call places//
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
              'type': 'night_clubs',
            'radius': 1000,
            'location': '59.334591,18.063240',
        },
    }
// req = $.ajax(settings);
  //  req.done(function(data) {
    //    console.info(data);
   // });
}

$(document).ready(function () {
    var input = document.getElementById("autocomplete");
    var searchBox = new google.maps.places.SearchBox(input);
    var autocomplete = new

    createMap();

    searchBox.addListener("places_changed", function () {
        let places = searchBox.getPlaces();

                service --> places
                request = {
                    'radius': 5000,
                    'type': 'restaurant',
                }
                places = service.getPlaces(request)

        if (places.length == 0) {
            return;
        }

//        places.forEach(function (result) {
//            console.log(result);
//        })
    });
    
});
//function myFunction() {
//    var input, filter, ul, li, a, i, txtValue;
//    input = document.getElementById("myInput");
//    filter = input.value.toUpperCase();
//    ul = document.getElementById("myUL");
//    li = ul.getElementsByTagName("li");
//    for (i = 0; i < li.length; i++) {
//        a = li[i].getElementsByTagName("a")[0];
//        txtValue = a.textContent || a.innerText;
//        if (txtValue.toUpperCase().indexOf(filter) > -1) {
//            li[i].style.display = "";
//        } else {
//            li[i].style.display = "none";
//        }
//    }
//};

$(document).ready(function () {

        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var locations = [
            {lat: 59.334591,lng: 18.063240},
            {lat: 59.3365, lng:18.0721},
            {lat: 59.3184, lng:18.0744},
            {lat: 59.2917, lng:18.0793}
        ];
         });
       