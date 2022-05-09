let arr = [1, 2, 3, 4, 5, 6];
let arr1 = arr;
arr1.push(7);
console.log(arr, arr1);
//SHALLOW COPY of ARRAY
let arr2 = [...arr];
arr2.push(8);

console.log("After using seperator operator...");
console.log(arr, arr2);
console.log("Shallow copy For Objects...");
//shallow copy of object
let person = {
  name: "Ram",
  age: 27,
  desig: "CEO",
};
let personCopy = { ...person };
personCopy.phNumber = 7977928194;
person.name = "Krishna";
console.log(person, personCopy);
//Nested Object
let music = {
  name: "POP",
  type: "kpop",
  band: {
    bname: "BTS",
    leader: "RM",
    Membrcount: 7,
  },
};
let musicCopy = { ...music };
music.type = "western";
music.band.country = "Korea";
console.log("After shallow copy");
console.log(music, musicCopy);
//DEEp COPY
let musicDeep = { ...music, band: { ...music.band } };
musicDeep.band.bname = "TXT";
console.log("After deep copy");
console.log(music, musicCopy, musicDeep);
