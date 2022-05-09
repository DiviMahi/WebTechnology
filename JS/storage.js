localStorage.setItem("Name", "Divya");
localStorage.getItem("Name");
document.write(localStorage.getItem("Name"));
sessionStorage.setItem("Age", "21");
document.write(sessionStorage.getItem("Age"));
function login() {
  localStorage.setItem("a", "10");
  sessionStorage.setItem("b", "20");
}
function increment() {
  a = Number(localStorage.getItem("a")) + 10;

  localStorage.setItem("a", a);
  b = Number(sessionStorage.getItem("b")) + 10;
  sessionStorage.setItem("b", b);
}
function logout() {
  localStorage.clear();
  sessionStorage.clear();
}
