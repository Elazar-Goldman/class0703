"use strict";
(function () {
  let myTitle = document.getElementById("title");

  // method filter returns an array of all items that answer a specific condition
  // arrow function ==> we will start using arrow functions
  // method map

  let ages = [
    11, 14, 34, 5, 65, 23, 46, 76, 23, 34, 41, 54, 73, 23, 4, 53, 64, 23, 32,
    54, 63, 74,
  ];

  function oldAges(bob) {
    return bob > 55;
  }

  let old = ages.filter(oldAges);

  function numDivBy3(age) {
    return age % 3 === 0;
  }
  let Trips = ages.filter(numDivBy3);

  Trips[2] = "Bob";

  Trips = ages.filter(numDivBy3);

  console.log(ages);

  myTitle.style.backgroundColor = "red";

  // filter using an anonymous function
  const VeryYong = ages.filter(function (age) {
    return age < 18;
  });
  const DivsableBy2 = ages.filter(function (age) {
    return age % 2 === 0;
  });

  //anonymous function

  // (function(){
  //     code
  // })()

  // 1) open () brackets and place a funciton inside
  // 2) and then open anothe set of ()

  // anonymous function exapmle.
  (function () {
    console.log("This is from anonymous function");
  })();

  (function () {
    myTitle.style.backgroundColor = "orange";
  })();

  // the second () is calling the function

  // Arrow function... very improtent
})();
// We declare a varable
// we say it is = to a function ()
// and then => {} and place all logic

let myFirstArrow = (name, number = "first") => {
  console.log(`look at ${name} I am making my ${number} arrow fuction`);
};

function greetings() {
  console.log(`look at me I am 1000000  fuction`);
}

// The building on arrow funciton const/let <giveAname> = () =>{}

let sum = (num1, num2) => {
  return num1 + num2;
};

let myGreet = (msg) => console.log(`${msg} to Mr.Cohen`);

// with Arrow functions
// if we can put the whole function on 1 line we do not neet {};
// If we dont have {} the funciton knows explicity to return the value
// When the functions knows to return the value, there is no need for "return"
// If the funciton has exactly one permiter, there is no need for ();

const SQR = (num) => num ** 2;
// Take a look at the CALL BACK FUNCTION this is an anonymous function
// const NEWYONG = ages.filter(()=>{})

// making a function that returns a rgb color random

let makeColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();
  return `rgba(${r},${g},${b},${a})`;
};

let ourAges = [
  11, 14, 34, 5, 65, 23, 46, 76, 23, 34, 41, 54, 73, 23, 4, 53, 64, 23, 32, 54,
  63, 74,
];

const NEWYONG = ourAges.filter((age) => age < 30);

// We are now learning map()
// we will see the common example of map
// and then we will see why map kicks ass

// map is another methhod for arrays, that is iterable
// map returns a new array, with all of the values of the origanel array
// map preforas a funciton on all values

let nextYear = ourAges.map((laestAge) => {
  return laestAge * 2 > 50;
});

let myElem = document.getElementById("root");

ourAges.map((age) => {
  myElem.innerHTML += `
    <div class="inner-age">your age is ${age}</div>
    `;
});

let allAges = document.querySelectorAll(".inner-age");
// getElemntsByClassNames html collection ====> has lengeth
let moreAges = document.getElementsByClassName("inner-age");

console.log(allAges);

allAges.forEach((singleDiv) => {
  singleDiv.style.backgroundColor = makeColor();
  singleDiv.style.color = makeColor();
});
let fakeStuds = [
  { name: "Eli", subject: "FullStack", grade: "34" },
  { name: "Mosh", subject: "FullStack", grade: "76" },
  { name: "Rina", subject: "FullStack", grade: "89" },
  { name: "Asam", subject: "FullStack", grade: "90" },
  { name: "Yoni", subject: "FullStack", grade: "70" },
];

let ourStudents = [];
let iName = document.getElementById("name");
let iSub = document.getElementById("subject");
let iGrade = document.getElementById("grade");

let getVals = () => {
  let sName = iName.value;
  let sSub = iSub.value;
  let sGrade = iGrade.value;

  let obj = {
    name: sName,
    subject: sSub,
    grade: sGrade,
  };

  ourStudents.push(obj);
  iName.value = "";
  iSub.value = "";
  iGrade.value = "";
};
// this is what the user is putting in the input
let mGrade = document.getElementById("minGrade");

let studDis = document.getElementById("dispaly");
let displayStuds = () => {
  let selectStuds = fakeStuds.filter((stud) => stud.grade > mGrade.value);

  console.log(selectStuds);

  selectStuds.map((item) => {
    studDis.innerHTML += `
  <div>
  <div>Studens name is : ${item.name}</div>
  <div>Studens subject is : ${item.subject}</div>
  <div>Studens grade is : ${item.grade}</div>
</div>
  `;
  });
};
