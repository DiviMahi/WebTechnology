var arr = ["Divya", 1, "true", { sports: "Shuttle" }];
console.log(arr);

for (var i = 0; i < arr.length; i++) {
  document.write(arr[i]);
  document.write("-");
}

var arr1 = [10, 20, 30, 40, 50];
arr1.push(60);
for (var j = 1; j < arr1.length; j++) {
  document.write(arr1[j]);
}
//for loop
for (var j = 0; j < arr1.length; j++) {
  console.log(arr1[j] + 10);
}
//for of loop
for (const i of arr1) {
  console.log(i);
}
var person = {
  Name: "Divya",
  Id: 1,
};
//for in
for (var key in person) {
  console.log(key);
}
