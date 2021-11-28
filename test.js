async function test() {
  console.log(await holo("art")); // http://discord-holo-api.ml/api/art/(905).jpg
}
test();

async function test() {
  console.log(await holo("endpoint")); // Returns the list of endpoints
}
test();

holo("art").then((res) => {
    console.log(res); // http://discord-holo-api.ml/api/art/(346).jpg
});

holo("endpoint").then((res) => {
    console.log(res); // Returns the list of endpoints
});