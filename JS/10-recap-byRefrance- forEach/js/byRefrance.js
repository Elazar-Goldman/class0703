const Elem = document.querySelector("#root");
const ElemColor = document.querySelector("#color");
let firstName = "Tom";
let secondName = firstName;
secondName = "Yossi";

console.log(firstName);

// sharon yoss
// maten Tom
// daniel Yossi

let firstNames = ["Tom", "Gronk", "Bill"];
// this kind of populatoin is called by refrance;
let secondNames = firstNames;
secondNames[2] = "Roby";

console.log(firstNames[2]);

// Arrays are by refrance

let rooms = {
  name: "lehavas",
  floor: "clothes",
  bed: "clothes",
};

let rooms2 = rooms;
rooms2.bed = "Sheets";

console.log(rooms.bed);

// const
let eNAme;
const MyName = "Eli";

const Users = ["Eli", "Tom", "Jaery"];
const Colors = ["Red", "Green", "Blue"];

Users.forEach(printName);

function printName(name) {
  Elem.innerHTML += `
<div>Your name is : ${name}</div>
`;
}


Colors.forEach(function (item) {
  ElemColor.innerHTML += `
    <div>Your name is : ${item}</div>
    `;
});



