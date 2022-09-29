import { vipArr, ChangeColor } from "./vipJson.js";

let elem = document.querySelector("#root");
let myTitle = document.querySelector("h1");

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

const renderVip = (arr) => {
  newElem.innerHTML = "";
  arr.map((vip) => {
    newElem.innerHTML += `
        <div class="vip-div">
        <h3>name is: ${vip.name}</h3>
        <div>worth is : ${vip["worth"]}</div>
        <img src="${vip["image"]}" alt="${vip.name}">
        </div>
        `;
  });
};

renderVip(vipArr);

let myH3 = document.querySelectorAll("h3");
console.dir(myH3[0]);

myH3[0].className = "red";

myH3[1].id = "small";

myH3[2].addEventListener("click", () => {
  myH3[0].classList.toggle("no-disp");
});

myBtn.addEventListener("click", () => {
  let val = parseInt(myInput.value);
  console.log(val);

  let veryVip = vipArr.filter((vip) => {
    let indexB = vip.worth.indexOf("B");
    let vipWorth = parseInt(vip.worth.substring(1, indexB));

    return vipWorth > val;
  });

  console.log(veryVip);
  renderVip(veryVip);
  myInput.value = "";
});

myTitle.addEventListener("mouseover", () => {
  myTitle.style.backgroundColor = ChangeColor();
});
myTitle.addEventListener("mouseout", () => {
  myTitle.style.backgroundColor = "";
});

// let richPep = document.querySelectorAll(".vip-div");
