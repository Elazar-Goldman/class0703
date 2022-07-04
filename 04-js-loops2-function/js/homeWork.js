// When we use let the SCOPE of the variable is local
// When we use var the SCOPE of the variable is global

// gloabel becaues it was called outside of any scope.
let msg = "Ohhhh my g-d!!!!!!!!!!!   there is a boom here";

let flag = 0;

for (let x = 1; x <= 100; x++) {
  if (x % 7 === 0 || x.toString().includes("7")) {
    if (flag === 1) {
      console.log("This is a double boom");
    } else {
      console.log(msg);
    }

    flag = 1;
  } else {
    console.log(x);

    flag = 0;
  }
}

console.log(msg);
// console.log("Loook over here !!!!!: " + x);

let souts = ["&#9824", "&#9827", "&#9829;", "&#9830;"];
let suitNames = ["Spade", "Club", "Hart", "Diamond"];

for (let x = 0; x < suitNames.length; x++) {
  console.log(suitNames[x]);
  for (i = 1; i <= 13; i++) {
    console.log(i +" "+ suitNames[x]);
  }
}
