let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let address=user.address;
let city=address.city;

let geo=address.geo;
let lat=geo.lat;
let lng=geo.lng;

console.log(city,lat,lng);
