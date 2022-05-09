new Promise(function (resolve, reject) {
  if (15 > 10) {
    resolve("Success");
  } else {
    reject("Error");
  }
})
  .then(function (data) {
    document.write(data);
    console.log(data);
  })
  .then(function (err) {
    document.write(err);
    console.log(err);
  });
