const myTrinagle = {
  sqr: function (num) {
    return num ** 2;
  },

  sum: function (num1, num2) {
    return num1 + num2;
  },

  isRightAngle: function (num1, num2, num3) {
    return this.sum(this.sqr(num1), this.sqr(num2)) === this.sqr(num3);
  },
};

let feb = [0, 1];

let myStr = `const febo = (num) => {
  let febNum = feb[feb.length - 2] + num;
  feb.push(febNum);
  if (febNum > 100) return feb;
  febo(febNum);
};`;

let myArr = [1, 23, 4534, ["non", "AWasifoj", "vneoi"]];

// this will create a JSON file of myArrr
let jsArr = JSON.stringify(myArr);

console.log(jsArr);

window.localStorage.setItem("testArr", jsArr);

// at this stage it is a JSON
let myItem = window.localStorage.getItem("testArr");
console.log(myItem);

// parsing a json
let newArr = JSON.parse(myItem);

console.log(newArr);

let myBtn = document.getElementById("btn");

myBtn.addEventListener("click", () => {
  let userName = document.getElementById("user-name");
  let tempName = userName.value;

  let jsName = JSON.stringify(tempName);

  window.localStorage.setItem("myUserName", jsName);
  userName.value = "";
});

let retBtn = document.getElementById("retBtn");
let retDiv = document.getElementById("retDiv");

retBtn.addEventListener("click", () => {
  // get from local storage the item
  let retName = window.localStorage.getItem("myUserName");
  // parsing the item
  let reaName = JSON.parse(retName);
  // desplaying the item
  retDiv.innerHTML = reaName;
});
