import { vipArr } from "./vipJson.js";

console.log(vipArr);

let elem = document.querySelector("#root");

console.log(elem);
// create elemnt is to create an elment
let myInput = document.createElement("input");
// new div
let newElem = document.createElement("div");
// set attribute genarates and attrabute
myInput.setAttribute("type", "number");
let myBtn = document.createElement("button");

myBtn.textContent = "click me";

elem.appendChild(myInput);
elem.appendChild(myBtn);
elem.appendChild(newElem);
myBtn.id = "btn-id";

// adding a onClick function, addEventListner, gets two perimters
// one is what is the agent listning to
// two, is a call back function

console.log(myInput);

vipArr.map((vip) => {
  newElem.innerHTML += `
    <div class="vip-div">
    <h3>name is: ${vip.name}</h3>
    <div>worth is : ${vip["worth"]}</div>
    <img src="${vip["image"]}" alt="${vip.name}">
    </div>
    `;
});

myBtn.addEventListener("click", () => {
  console.log("Hello");
});

// let richPep = document.querySelectorAll(".vip-div");
