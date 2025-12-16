import { getPlaces } from "./api.js";
import { initMap, addMarker } from "./map.js";

const map = initMap();

getPlaces().then(places => {
  places.forEach(place => {

    const marker = addMarker(map, place);

    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <strong>${place.name}</strong><br>
      <small>${place.city} • ${place.price}</small>
    `;

    item.onclick = () => {
      map.setView([place.lat, place.lng], 15);
      marker.openPopup();
    };

    document.getElementById('list').appendChild(item);
  });
});
