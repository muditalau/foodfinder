const map = L.map('map').setView([-6.2, 106.8], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

fetch('data/places.json')
  .then(res => res.json())
  .then(places => {
    places.forEach(place => {

      const marker = L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup(`
          <strong>${place.name}</strong><br>
          ${place.city}<br>
          ${place.tags.join(', ')}<br>
          ${place.note || ''}
        `);

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
