console.log(window);
console.log(window.alert("this is alert!"));
console.log(window.document);
console.log(window.history);
window.navigator.geolocation.getCurrentPosition((loc) => {
  console.log(loc);
});
let person = {
  name: "Divya",
  age: 21,
  details: function print() {
    console.log(this);
  },
};
console.log(person.details());
