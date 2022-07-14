let firstNum = document.getElementById("first");
let secondNum = document.getElementById("second");
let spanNum = document.querySelector("#span-num");
let err = document.querySelector("#error");

function sum() {
  let num1 = parseInt(firstNum.value);
  let num2 = parseInt(secondNum.value);

  let result = num1 + num2;
  // spanNum.innerHTML = num1 + num2;
  spanNum.innerHTML = result;
}

// function perimters is really like saying (in this case)
// let num2 = 23 (local with in the function)

function multolply(num1, num2, num3 = 3) {
  return num1 * num2 * num3;
}

let myNums = multolply(12, 23);
let hisNums = multolply(1, 9);
let favNums = multolply(9, 10);

console.log(favNums);

// ternary operator has three parts
// 1) if
// 2) if true
// 3) else
// many many many times it used to define a variable

function getColor() {
  let myColor = document.querySelector("#color").value;
  //   console.log("" === myColor);

  //   let favColor = (myColor === "") ? "hotPink" : myColor;
  //   changeColor(myColor);
  //   changeColor(favColor);

  myColor === "" ? (err.innerHTML = "Dode a coller ") : changeColor(myColor);
}

function changeColor(color = "aqua") {
  document.body.style.backgroundColor = color;
}
