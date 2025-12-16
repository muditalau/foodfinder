export function initMap() {
  const map = L.map('map').setView([-6.2, 106.8], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  return map;
}

export function addMarker(map, place) {
  return L.marker([place.lat, place.lng])
    .addTo(map)
    .bindPopup(`
      <strong>${place.name}</strong><br>
      ${place.city}<br>
      ${place.tags.join(', ')}<br>
      ${place.note || ''}
    `);
}
