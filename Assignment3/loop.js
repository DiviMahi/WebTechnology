//Example :1
console.log("for loop");
let arr = [10, 20, 30, "dv", true];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("for of");

for (var i of arr) {
  console.log(i);
}
console.log("for in");
for (let i in arr) {
  console.log(arr[i]);
}
//Example:2
let obj = {
  name: "Divya",
  age: 21,
  Branch: "CSE",
};

console.log("for in");
for (let i in obj) {
  console.log(obj[i]);
}
//Example:3
let arrobj = [
  {
    name: "Thiyagu",
    age: 26,
    Branch: "MECHATRONICS",
  },
  { name: "Divya", age: 21, Branch: "CSE" },
  {
    name: "Meena",
    age: 25,
    Branch: "CSE",
  },
];
console.log("for in");
for (let i in arrobj) {
  console.log(arrobj[i].name);
  console.log(arrobj[i].age);
  console.log(arrobj[i].Branch);
}
