let suitNames = ["Spade", "Club", "Heart", "Diamond"];
let myCats = ["Mitzy", "SnowBall", "Artour", "Hatuoly", "Bob"];
let myName = "Eli";

for (let y = 0; y < suitNames.length + 1; y++) {
  console.log(myCats[y]);

  for (let x = 1; x <= 13; x++) {
    console.log(x + " : " + myCats[y]);
  }
}

console.log("I am after the loop");

let newArr = suitNames.concat(myCats, myName);

console.log(newArr);
newArr.splice(3, 2, "Tinker");
console.log(newArr);
