import { msg } from "./helpers.js";
console.log(msg);
let myTitle = document.getElementById("title");
let conter = 0;
let myCalc = {
  myNum: 7,

  setMyNum: function (num) {
    conter++;
    myTitle.innerHTML = `this is cool you are now at ${conter}`;
    this.myNum = num;
  },

  getMyNum: function () {
    return this.myNum;
  },

  printToLog: function () {
    console.log(this.getMyNum());
  },

  sqr: function (num) {
    return num ** 2;
  },
};
