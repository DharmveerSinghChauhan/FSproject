mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  Style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

// const coordinates = [80.9462, 26.8467];
// console.log(listing.geometry.coordinates);

const marker = new mapboxgl.Marker({color:'red'})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({offset:25}).setHTML(
        `<h4>${listing.title}</h4><p>exact location of object</p>`
    )
  )
  .addTo(map);
