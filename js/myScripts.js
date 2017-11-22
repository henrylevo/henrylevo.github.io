/*
 * The JavaScript of Henry Levo's website
 * Copyright, Henry Levo
 * 17.11.2017
 * 
 */

/* Table of contents
––––––––––––––––––––––––––––––––––––––––––––––––––
Shared
    - Menu nav
    - Style Button
    - Google Maps

*/

/* Menu nav
–––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
        //document.getElementById("main").style.marginRight = "300px";
    }

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        //document.getElementById("main").style.marginRight = "0";
    }


/* Style Button
–––––––––––––––––––––––––––––––––––––––––––––––––– */
    function switchStyled() {
        document.getElementById("classic-btn").id = "styled-btn";
        document.getElementById("styled-btn").id = "classic-btn";
    }

    function switchClassic() {
        document.getElementById("styled-btn").id = "classic-btn";
        document.getElementById("classic-btn").id = "styled-btn";
    }

/* Google Maps
–––––––––––––––––––––––––––––––––––––––––––––––––– */
    function initMap() {
        var posNow = {lat: 59.911491, lng: 10.757933};
        var map = new google.maps.Map(document.getElementById('map'), 
        {
            zoom: 2,
            center: posNow,
            styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ]
        });
        var marker = new google.maps.Marker({
            position: posNow,
            map: map
        });
    }