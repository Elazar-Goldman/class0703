// let building = ["house","house","house","house","house"];
let building = [
  {
    name: "Goldman House",
    numPeople: 5,
    numKids: 3,
    crazyniceFactor: 9,
  },
  {
    name: "Cohen hous",
    room: {},
    numPeople: 3,
  },
  {},
  {},
  {},
  {},
];

// first thing get to the right place.

building[0]["rooms"] = {
  magensRoom: {
    dresser: "toys",
    bed: "toys",
    floor: "paper",
  },
};

function calc(num1, num2) {
  return num1 * num2;
}
calc(2, 3);

function addRoom(bNum, rName, dreStuff, badStuff, floStuff = "carpit") {
  let obj = {
    dresser: dreStuff,
    bed: badStuff,
    floor: floStuff,
  };

  building[bNum].rooms[rName] = obj;

  return obj;
}

function printRoom(room) {
  let roomElem = document.getElementById("room");
  roomElem.innerHTML += `
  <div>
  <div>in the dressser there is : ${room.dresser}</div>
  <div> in the bed there is: ${room.bed}</div>
  <div>on the floor there are: ${room["floor"]}</div>
</div>
  `;
}

let newRoom = addRoom(0, "guestRoom", "space", "blanket", "chair");

printRoom(newRoom);

let secondRoom = addRoom(0, "office", "paper", "Me", "clothes");

printRoom(secondRoom);
