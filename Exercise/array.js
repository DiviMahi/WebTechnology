var arr = [
  "Divya",
  1,
  true,
  undefined,
  { name: "RM" },
  ["BTS", "BLACKPINK", "TXT"],
];
console.log(arr[2]);
console.log(arr[3]);
console.log(typeof arr[2]);
console.log(arr.length);
console.log(arr[4].length);
console.log(arr[4].name);
console.log(arr[4]["name"]);
console.log(arr[5]);
console.log(arr[5][0]);
console.log(arr[5][2 - 1]);
var a = [1, 2, 3, 4, 5, 6, 7];
var mapMethod = a.map((value, index, array) => {
  console.log(index);
  console.log(value);
  console.log(array);
});
var bts = [
  {
    name: "Kim Namjoon",
    sname: "RM",
    age: 27,
  },
  {
    name: "Jeon Jungkook",
    sname: "JK",
    age: 24,
  },
  {
    name: "Park Jimin",
    sname: "JIMIN",
    age: 26,
  },
];
var getMap = bts.map((value, index, array) => {
  console.log("Name:" + value.name);
  console.log("Stage Name:" + value.sname);
  console.log("Age:" + value.age);
});
console.log(bts);
var age = [10, 20, 23, 24, 56, 17, 90, 9];
age.filter((value, index, array) => {
  if (value >= 18) {
    console.log(value);
  }
});
var mapfun = age.map((value, index, array) => {
  return value >= 18;
});
console.log(mapfun);
var filterfun = age.filter((value, index, array) => {
  return value >= 18;
});
console.log(filterfun);

var filterfun1 = age.filter((value, index, array) => {
  return value + 2;
});
console.log(filterfun1);
//  let arr=[1,2];
//  let{1,2}=arr;
//  let obj={
//    name:"dv",
//    age:21
//  }
//  let{name,age}=obj;
