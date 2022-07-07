// the functions will have two brackets (){}
// this code will only run when we call the funciton
// fire the function
let myTitle = document.getElementById("title");
let myBtn = document.getElementById("btn");
let span = document.getElementById("inner-span");

// Function recives permiters

function greetings(color) {
  myTitle.style.backgroundColor = color;
}

// Arguments to the function
greetings("orange");
// function one
function bobsFunnyIceCreamCar(val, num) {
  return val - num;
}
// function two
function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

let ourNums = sum(19, 10);
let reduceNums = sum(sum(10, 20), sum(10, 5));

console.log(reduceNums);

let firstNum = sum(2, 3);

let secondNum = sum(4, 5);

function changeColor() {
  document.body.style.backgroundColor = "hotPink";
  myTitle.style.backgroundColor = "lightGreen";
  myBtn.style.backgroundColor = "yellow";
}

function makeNum() {
  let randNum = Math.floor(Math.random() * 101);
  if (randNum > 75) {
    myTitle.innerHTML = "I love JS" + randNum + " out of 100";
  } else {
    myTitle.innerHTML = "I love JS and know I will become a master";
  }
  span.innerHTML = randNum;
}


