let oranges = ["green", 3, 4];
let pepers = ["red", 1.3, 7];
let banana = ["yellow", 2, 2];
let list = ["color", "price", "qty"];
let userArr = ["eli", "Jer"];
let keys = ["name", "city", "car"];

console.log(typeof banana);

// What is CRUD?
// C  - Create
// R - Read
// U - update
// D - delete

// to make an object we use currly brackets {}
let user = {
  // the desgnations sign in an object is :
  name: "Eli",
  city: "Jerusalem",
  car: "Mazda",

  class: {
    fullstack: {
      html: 6,
      css: 7,
      javaScript: 9,
    },
    cocking: {
      milk: {
        pizza: 7,
        lasgnie: 5,
        pasta: 8,
      },
    },
  },
};

let loc = "city";

// First method of reading a propoity in an object
console.log(user.car);

// Second method of reading a propoity in an object
console.log(user["name"]);

// Third method of reading a propoity in an object
console.log(user[loc]);

for (let key of keys) {
  console.log(user[key]);
}
user.car = "fiat";

user.dog = "lacy";

user.class.fullstack.javaScript = 10;
