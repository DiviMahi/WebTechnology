let obj = {
  name: "ab",
  age: 90,
  address: {
    city: "blr",
  },
};
let obj1 = { ...obj, ...address };
obj1.city = "cbe";
console.log(obj);
console.log(obj1);
