let myTitle = document.getElementById("title");
let elem = document.getElementById("root");

// Objects hold two main datas types peramters, methods

let colors = {
  // these are permiters
  red: "rgb(250,0,0)",
  green: "rgb(0,250,0)",
  blue: "rgb(0,0,250)",

  // MATHODS of the colors object
  colorMyTitle: function () {
    myTitle.style.backgroundColor = "green";
  },
  colorMyText: function (shade = "orange") {
    myTitle.style.color = shade;
  },
};

let calculaton = {
  plus: function (num1, num2) {
    return num1 + num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },

  sqr: function (x) {
    return x ** 2;
  },
};

let mySqr = "sqr";

let mySum = calculaton.plus(3, 4);

let myMultiply = calculaton["multiply"](calculaton.sqr(9), 9);

let mySqt = calculaton[mySqr](4);

title.innerHTML = mySum;
title.innerHTML += `this is so much fun ${myMultiply}`;

title.style.backgroundColor = `rgb(${myMultiply}, ${mySqt}, ${mySum})`;
let colorArry = ["red", "orange", "green"];

let myPosts = [
  {
    index: 0,
    title: "Wooow it is hot",
    bodyPost: " balnablb it is really lorem",
    small: " Amir ashknazi",
    // this is not related to Ynet
    color: function (elem, color) {
      elem.style.backgroundColor = color;
    },
  },
  {
    index: 1,
    title: "sport is cool",
    bodyPost: " bhaving fun",
    small: " Karin Hay",
    // this is not related to Ynet
    color: function (elem, color) {
      elem.style.backgroundColor = color;
    },
  },
  {
    index: 2,
    title: "Rolling with Rike",
    bodyPost: " bhaving fun",
    small: " Karin Hay",
    // this is not related to Ynet
    color: function (elem, color) {
      elem.style.backgroundColor = color;
    },
  },
];

for (let obj of myPosts) {
  elem.innerHTML += `
    <div class="inner-div m-5">
    <div>title: <strong>${obj.title} </strong></div>
    <div>body : ${obj.bodyPost} </div>
    <small>title: ${obj.small} </small>
</div>
    `;
  let myDivs = document.querySelectorAll(".inner-div");
  // We are catching the object
  // Catchign a perinte of each one of the objects.
  // calling the method of each object
  // catching the html element and passing then as argumebts
  //  cathing a color from color arraym and passing it as an argument.
  myPosts[obj.index].color(myDivs[obj.index], colorArry[obj.index]);
}
