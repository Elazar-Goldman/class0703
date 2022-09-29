// import
import { rgbMaker } from "./helpers.js";
let index = 0;

let elem = document.getElementById("title");

let titleChanger = setInterval(() => {
  // calling the function getting a obj
  let myRes = rgbMaker();
  // destucturing the obj
  let { color, sum } = myRes;
  console.log(color);
  elem.style.backgroundColor = color;
  // turnery oprator
  let addMore = sum < 100 ? 75 : 0;
  let textColor = rgbMaker(addMore);

  let myColor = textColor.color;
  console.log(myColor);
  elem.style.color = myColor;
  index++;
  console.log(index);
  if (index >= 5) clearInterval(titleChanger);
}, 2000);

let sqr = (num) => {
  return num ** 2;
};

let mySqr = sqr();
