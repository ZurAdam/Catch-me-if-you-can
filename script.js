let marker;
let firstLocation = { lat: 50.049683, lng: 19.944544 };
let uluru;
let map;
// Initialize and add the map
function initMap() {
  // The location of Uluru
  uluru = { lat: 50.049683, lng: 19.944544 };
  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: firstLocation,
    keyboardShortcuts: false
  });
  // The marker, positioned at Uluru
  (marker = new google.maps.Marker({
    position: getPosition,
    map: map,
    icon:
      "https://cdn1.imggmi.com/uploads/2019/3/18/8e35b04acc9e8eb2c6705fb304b20d3e-full.png",
    title: "Witcher"
  })),
    getPosition();
  window.addEventListener("keydown", moveMarker);
}

// current position
function getPosition() {
  navigator.geolocation.getCurrentPosition(allowLocation, denyLocation);
}

function allowLocation(data) {
  let coords = {
    lat: data.coords.latitude,
    lng: data.coords.longitude
  };
  map.setCenter(coords);
  marker.setPosition(coords);
}

function denyLocation(err) {
  console.log(err);
}

function moveMarker(e) {
  let lat = marker.getPosition().lat();
  let lng = marker.getPosition().lng();

  switch (e.code) {
    case "ArrowUp":
      lat += 0.01;
      break;
    case "ArrowDown":
      lat -= 0.01;
      break;
    case "ArrowRight":
      lng += 0.01;
      break;
    case "ArrowLeft":
      lng -= 0.01;
      break;
  }
  let position = { lat, lng };
  marker.setPosition(position);
}
