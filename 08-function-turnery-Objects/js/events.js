let elem = document.querySelectorAll(".container");
let myTitle = document.querySelector("#title");
let myText = document.querySelector("#text");
let msg = "";

console.log(myTitle);
console.dir(elem[0]);

function changeColor() {
  document.body.style.backgroundColor = "orange";
  elem[0].style.backgroundColor = "pink";
}
function restoreColor() {
  document.body.style.backgroundColor = "aqua";
  elem[0].style.backgroundColor = "";
}

function myMsg() {
  msg = myText.value;
  myTitle.innerHTML = msg;
}
