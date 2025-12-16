import { getPlaces } from "./api.js";
import { initMap, addMarker } from "./map.js";
import { addListItem } from "./list.js";

const map = initMap();

getPlaces().then(places => {
  places.forEach(place => {

    const marker = addMarker(map, place);

addListItem(place, marker, map);

  });
});
