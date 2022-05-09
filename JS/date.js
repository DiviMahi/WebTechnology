let systemDate = new Date();
console.log(systemDate.getFullYear());

console.log(systemDate.getDate());
console.log(systemDate.getMonth());
console.log(systemDate.getDay());
console.log(systemDate.getTime());

console.log(systemDate.getHours());
console.log(systemDate.getMinutes());
console.log(systemDate.getSeconds());

console.log(systemDate.getMilliseconds());

console.log(systemDate.getTimezoneOffset());
console.log(systemDate.getUTCDate());
console.log(systemDate.getUTCDay());
let systemDate1 = new Date("Dec/21/2021");
console.log(systemDate1);
console.log(
  systemDate1.getMonth() +
    1 +
    "/" +
    systemDate1.getDate() +
    "/" +
    systemDate1.getFullYear()
);
let date = systemDate1.getDate();
let year = systemDate1.getFullYear();
let month = systemDate1.getMonth();
let fulldate = `${month + 1}/${date}/${year}`;
console.log(fulldate);
let months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
let monthname = months[systemDate1.getMonth()];
console.log(monthname);
