let obj = {
  Name: "Divya",
  Age: 21,
  Phno: 7977928195,
};
let jsonobj = JSON.stringify(obj);
console.log("This is Json object");
console.log(jsonobj);
let jsobj = JSON.parse(jsonobj);
console.log("This is Java script object");
console.log(jsobj);
