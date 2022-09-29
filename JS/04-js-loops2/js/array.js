// Array is with block brackets []

// CRUD
// C - Create
// R - Read
//U - Update
//D - Delete

let myCar = "Mazda";
console.log(myCar);
myCar = "BMW";
console.log(myCar);

let myArr = ["Eli", "I love Jerusalem", 12, false, myCar, "Hello World", 23];
console.log(myArr[0], " :", myArr[1]);
//
myArr.push("Tom", "Rob");
// Please print to the console "Brady"

for (let x = 0; x < myArr.length; x++) {
  console.log(myArr[x]);
}

// please please please open a new array and add to it all
//number that devide by 3 and 2
// from the number 0 - 1000... but not number  66 and 666
// and then print it out to the console

let niceNums = [];

for (let x = 0; x < 1000; x++) {
  if (x % 2 === 0) {
    if (x % 3 === 0) {
      if (x === 66 || x === 666) {
        continue;
      }
      niceNums.push(x);
    }
  }
}

// embded loop
for (let x = 0; x < niceNums.length; x++) {
  console.log(niceNums[x], x);

  // first the whole loop needs to run, and only after will JS continue
  for (let i = 0; i < 3; i++) {
    console.log("This is long");
  }
}
