import { getPlaces } from "./api.js";
import { initMap, addMarker } from "./map.js";
import { addListItem } from "./list.js";
import { haversineDistance } from "./utils.js";


const map = initMap();

let allPlaces = [];

getPlaces().then(places => {
  allPlaces = places;

  places.forEach(place => {
    const marker = addMarker(map, place);
    place._marker = marker;
    addListItem(place, marker, map);
  });
});

document.getElementById('findBtn').onclick = () => {
  const userLat = parseFloat(document.getElementById('userLat').value);
  const userLng = parseFloat(document.getElementById('userLng').value);

  if (isNaN(userLat) || isNaN(userLng)) {
    alert("Please enter valid coordinates");
    return;
  }

  allPlaces.forEach(place => {
    place.distance = haversineDistance(
      userLat,
      userLng,
      place.lat,
      place.lng
    );
  });

  const nearest = allPlaces
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 5);

  map.setView([userLat, userLng], 13);

  nearest.forEach(place => {
    place._marker.openPopup();
  });

  console.log("Top 5 nearest:", nearest);
};

