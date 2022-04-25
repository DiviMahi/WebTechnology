//NAMED FUNCTION
function prime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
}

prime(2)
  ? document.write("The given number is a prime")
  : document.write("The given number is Not a prime");
//ANONYMOUS FUNCTION

let prime1 = function (n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
};

prime1(2)
  ? document.write("The given number is a prime")
  : document.write("The given number is Not a prime");

//IIF FUNCTION

let getPrime = (function (n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
})(2)
  ? document.write("The given number is a prime")
  : document.write("The given number is Not a prime");
//ARROW FUNCTION

let prime2 = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
};

prime(2)
  ? document.write("The given number is a prime")
  : document.write("The given number is Not a prime");
