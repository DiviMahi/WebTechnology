debugger;
a;
getName("v", "rm");
function getName(a, b) {
  console.log(a + b);
  document.write(a + b);
}
getName("Divya", "Arumugam");
var a = function () {
  console.log("This is Anonymous function");
  document.write("This is Anonymous function");
};
a();
function fun1(fun2) {
  console.log(fun2);
  console.log("this is funtion 1");
}
function fun2(a) {
  console.log("this is funtion 2");
  console.log(a);
}
fun1(fun2("dv"));
