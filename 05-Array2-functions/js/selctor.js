let elem = document.getElementById("title");

let myClass = document.getElementsByClassName("inner-div");

elem.innerHTML += " No Sh!!!!!! This is so Cool";

myClass[1].style.backgroundColor = "green";

let myRoot = document.getElementById("root");

myRoot.innerHTML = "<ul><li>Isreal</li><li>USA</li><li>Argantina</li></ul>";

//I am teaching you one method that pretty soon we will overright
// I must show you this BECAUSE YOU WILL bump in to it;
// This is a bit hard because of the canctanation
let frot = "Malon";

let under = document.getElementById("under-div");
// when you want to inject JS into a string you do the following "+<JS> +"
under.innerHTML = "<ul>";
under.innerHTML += '<li class="frot">Orange </li>';
under.innerHTML += "<li class='frot'>Mango</li>";
under.innerHTML += '<li class="frot">Apple</li>';
under.innerHTML += "<li>Lemon</li>";
under.innerHTML += "<li>Tomato</li>";
under.innerHTML += "<li>" + frot + "</li>";
under.innerHTML += "</ul>";

let myCars = ["BMW", "Mazda", "Fiat", "Audi"];

let myColor = ["hotPink", "red", "blue", "green"];

let myList = document.getElementById("main-div");

myList.innerHTML = "<ul id='my-list'>";
for (let x = 0; x < myCars.length; x++) {
  myList.innerHTML += '<li class="my-car">' + myCars[x] + "</li>";
}
myList.innerHTML += "</ul>";

let carColor = document.getElementsByClassName("my-car");

for (let x = 0; x < carColor.length; x++) {
  carColor[x].style.backgroundColor = myColor[x];
}
