"use strict";

var budget = 20000;

var extrea = 10000;

var charry = 5000;
// most clear example, where we open a new variable
var newBudget = budget + extrea;

console.log("this is newBudget : " + newBudget);

// Change the value of the variable itself
budget = budget + extrea;

console.log("this is budget : " + budget);
// this is the same as writing budget = budget + charry;
budget += charry;
newBudget += charry;
console.log(budget);
console.log("this is budget + charry : " + budget);

var commstion = 1.15;
// times
budget *= commstion;

console.log(budget);
// devided by
budget /= 2;

console.log(budget);

// squre of a number
var threeSqr = 3 ** 3;

// This is the defrance between addation and cancatnation
var myCacl = 1 + 2 + 3 + 4;
var myCacl2 = "1" + 2 + 3 + 4;
var myCacl3 = 1 + 2 + "3" + 4;
var myCacl4 = 1 + 2 + 3 + "4";

console.log(myCacl2);
console.log(myCacl3);
console.log(myCacl4);

// console.log(extrea == 10000);

// all kids of equalities
// ---- =   => השמה difining the value of a variable
// ---- ==  => equality question
// ---- ===  => strict equality question

// roule of thumb always use 3 === except if you want to use 2 =

console.log("three" === "THREE");
console.log(4 >= "4");

// budget++;
if (budget > 20125) {
  console.log("YAYYYYYYYYYYYY We have it");
} else if (budget >= 20125) {
  console.log(" it is even");
} else {
  console.log("I am in side the else");
}

console.log("after the yayyyyyy");

// Example for if, and embedded if (מקונן)
// var password = prompt("Enter password", "Password");

// if (password.length >= 6) {
//   console.log("YAYYYY you did gteat");

//   var newPass = password;
// } else {
//   var newPass = prompt("Password needs to be > 6", "password");

//   if (newPass.length < 6) {
//     console.log("NOOOOOOOOO.,,,,, dont be like that!!!!!");
//     var lastPass = prompt("Password needs to be > 6", "password");
//   }
// }

// console.log(newPass);

var bool = true;

// ! IS NOT
if (2 !== "2") {
  console.log("veryyyy goood ");
} else {
  console.log("veryyyy bad ");
}
//true
2 == "2";
// false
2 === "2";
//And And or
if ("Bob".length > 8 || budget > 30000 || 3 > 2) {
  console.log("very good");
} else {
  console.log("very bad");
}

let toggle = true;

if (toggle) {
  toggle = !toggle;
} else {
  toggle = !toggle;
}

let myNum = prompt("your age");
let hisNum = prompt("his age");
let ourNum = myNum + hisNum;
console.log(ourNum);
console.log(typeof myNum);
if (ourNum < 100) {
  console.log("you can come in");
} else {
  console.log("Go away");
}
