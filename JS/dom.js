const element = document.getElementById("demo");
element.innerText = "HELLO MUSICWORLD!";
const ele = document.getElementsByClassName("para");
element.style.background = "red";
const paras = document.getElementsByClassName("para");
//creating element dynamically
let element1 = document.createElement("p");
element1.innerText = "this is new tag created";
document.body.appendChild(element1);
//console.log(document);
const e1 = document.querySelector("#demo");
const e3 = document.querySelector("p");

const e2 = document.querySelectorAll("p");
console.log(e1);
console.log(e2);
console.log(e3);
