// var userAge = prompt("Your age please", "Age");

// home work with if nested.
// if (userAge >= 18) {
//   console.log("Please come in");
//   var meatEeter = prompt("do you eat meet? ", "Tour answer");
//   if (meatEeter.toLowerCase().trim() === "yes") {
//     var aptaite = prompt("are you hungry?", "your answer");
//     if (aptaite.toLowerCase().trim() === "yes") {
//       console.log("Here is your schmnitzla and rice");
//     } else {
//       console.log("Here is schnitzla ");
//     }
//   } else {
//     console.log("Please have salad");
//   }
// } else {
//   console.log("Sorry but maybe next time");
// }

// () ===> invoking function and method
// [] ==> indexs or arrays
// {} ====> objects

// two ways to concat
// +
// .

// Math.random() genrates a random number from 0 -1 (not including 1)
var random = Math.floor(Math.random() * 100) + 1;
// console.log(random);

// Math.flor() --- drops all that is after the .
// Math.flor(18.9999999) === 18

// All numbers from 0 - 6
var exampRandom = Math.floor(Math.random() * 7);
// All numbers from 0 - 7
var exampRandom2 = Math.floor(Math.random() * 8);

// All numbers from 1 - 7
var weekDay = Math.floor(Math.random() * 7) + 1;
console.log("Random number was :" + weekDay);
if (weekDay === 1) {
  console.log("Welcome to Sunday");
} else if (weekDay === 2) {
  console.log("Welcome to Monday");
} else if (weekDay === 3) {
  console.log("Welcome to Tousday");
} else if (weekDay === 4) {
  console.log("Welcome to Wednesday");
} else if (weekDay === 5) {
  console.log("Welcome to Thursday");
} else {
  console.log("Welcome to The weekend HAppy face");
}
var weekDay2 = Math.floor(Math.random() * 7) + 1;
console.log("Random second number was :" + weekDay2);
// this is not a good use case for the desired out come
// if (weekDay2 === 1) {
//   console.log("Welcome to Sunday");
// }
// if (weekDay2 === 2) {
//   console.log("Welcome to Monday");
// }
// if (weekDay2 === 3) {
//   console.log("Welcome to Tousday");
// }
// if (weekDay2 === 4) {
//   console.log("Welcome to Wednesday");
// }
// if (weekDay2 === 5) {
//   console.log("Welcome to Thursday");
// } else {
//   console.log("Welcome to The weekend HAppy face");
// }

// switch case, the switch
switch (weekDay2) {
  case 1:
    console.log("Wlcome to Sunday");
    break;
  case 2:
    console.log("Wlcome to Monday");
    break;
  case 3:
    console.log("Wlcome to Tousdau");
    break;
  case 4:
    console.log("Wlcome to wednesday");
    break;
  case 5:
    console.log("Wlcome to Thuersday    ");
    break;
  default:
    console.log("Wlcome to WeekEnd");
    break;
}

// Sting is true
// empty string is false
// string with '0' is true
// a number is true
// 0 is false
// - 1 is true
// bollen are true / false as you define them
// All complex data types are true
// NaN is false
// undefined is false
// null is false

if ("Bob") {
  console.log("Veryy good this is true");
} else {
  console.log("very bad this is not true");
}


//YAYYYYYYYYYYYYYYYY  