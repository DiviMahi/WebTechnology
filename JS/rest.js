function arr(...num) {
  let sum = 0;
  console.log(num);
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log("sum:", sum);
}
arr(10, 20);
arr(10, 20, 30);
arr(10, 20, 30, 40);
