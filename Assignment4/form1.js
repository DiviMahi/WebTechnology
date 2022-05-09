console.log("value of name:" + localStorage.getItem("Name"));

console.log("value of id:" + localStorage.getItem("Email"));

console.log("value of password:" + localStorage.getItem("Password"));

console.log("value of phno:" + localStorage.getItem("Phno"));

function getVal() {
  localStorage.setItem("Name", document.getElementById("name").value);
  localStorage.setItem("Email", document.getElementById("id").value);
  localStorage.setItem("Password", document.getElementById("password").value);
  localStorage.setItem("Phno", document.getElementById("phno").value);
}
function getTable() {}
