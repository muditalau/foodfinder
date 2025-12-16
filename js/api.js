export async function getPlaces() {
  const res = await fetch('data/places.json');
  return res.json();
}
