export function addListItem(place, marker, map) {
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
}
