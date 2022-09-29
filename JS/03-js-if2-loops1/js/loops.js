// This is our first loop... loops are hudge
//A for loop has three staments
// first - a varable with a value
// second an if statment regarding the varable
// Third Variable behavior

// for (var x = 0; x < 10; x++) {
//   if (x % 2 === 0) {
//     console.log(x + " says: hello to the world");
//   } else {
//     console.log(x + " Happnes to be an odd number");
//   }
// }

// for (var x = 0; x < 100; x++) {
//     console.log(x);
//   if (x % 2 === 0) {
//     if (x % 3 !== 0) {
//       console.log(x);
//     }
//   }
// }

// for (var x = 0; x < 100; x += 2) {
//   console.log(x);
// }

// continue == takes to the end of the current iteration
// brake == brakes the loop

for (var x = 1; x < 10; x++) {
  console.log("HAyyyyy look at me " + x);

  if (x % 4 === 0) {
    break;
    console.log("Hello World");
  }

  console.log(x);
}


