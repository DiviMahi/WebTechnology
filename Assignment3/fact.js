let f = 1;
//NAMED FUNCTION
function fact(n) {
  for (let i = 1; i <= n; i++) {
    f = f * i;
  }
  console.log(f);
}
fact(5);
//ANONYMOUS FUNCTION
f1 = 1;
let fact1 = function (n) {
  for (let i = 1; i <= n; i++) {
    f1 = f1 * i;
  }
  console.log(f1);
};
fact1(5);
//IIF FUNCTION
f2 = 1;
let getFact = (function (n) {
  for (let i = 1; i <= n; i++) {
    f2 = f2 * i;
  }
  console.log(f2);
})(5);
//ARROW FUNCTION
f3 = 1;
let fact2 = (n) => {
  for (let i = 1; i <= n; i++) {
    f3 = f3 * i;
  }
  console.log(f3);
};
fact2(5);
