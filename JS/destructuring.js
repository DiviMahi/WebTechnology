let obj = {
  name: "Divya",
  age: 21,
  desg: "CEO",
};
console.log(obj.desg);
//DESTRUCTURING
let { name, age, desg } = obj;
console.log(name);
let arr = ["Vibing", "Dancing", "singing", "Enjoying"];
let [hobby1, hobby2, hobby3, hobby4] = arr;
console.log(`hobby- ${hobby4}`);
