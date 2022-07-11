function changeColor() {
  document.body.style.backgroundColor = "orange";
  return "HEllo world";
}
// Maka a varaible for the count state
let myNum = 0;
// creaete a variable for the html elemnt
let elem = document.getElementById("counter");
// plus function
function addNum() {
  // adding a +1

  myNum++;
  // if I can put the whole if statment on one line there is no need for {}
  if (myNum > 5) myNum = 0;

  // rendering to the dom
  elem.innerHTML = myNum;
  console.log(myNum);
}

function subNum() {
  // subtracting a -1

  myNum--;
  if (myNum < 0) myNum = 5;
  // rendering to the dom
  elem.innerHTML = myNum;
  console.log(myNum);
}

function cacl(num1, num2) {
   num1 + num2;
}

let res = cacl(23,23);
