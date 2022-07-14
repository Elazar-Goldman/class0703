let list = ["Apple", "Tommato", "Orange"];

function addItem() {
  // I can pick up the value of the input in one line
  //   let newItem = document.querySelector("#item").value;

  // or I can have 2 steps one to pick up the html item, and one for the value
  let newItem = document.querySelector("#item");
  let val = newItem.value;
  console.log(val);
  list.push(val);
  newItem.value = "";
}

function addVipItem() {
  // I can pick up the value of the input in one line
  let vipItem = document.querySelector("#vipItem");
  let newVipItem = document.querySelector("#vipItem").value;
  // or I can have 2 steps one to pick up the html item, and one for the value
  //   let newItem = document.querySelector("#item");
  //   let val = newItem.value;
  console.log(newVipItem);
  list.unshift(newVipItem);
  vipItem.value = "";
}

function mark(listItem) {
  listItem.style.textDecoration = "line-through";
}

function dispList() {
  let dispElem = document.querySelectorAll(".disp");
  dispElem[0].innerHTML = "<ul>";
  // for of Loop
  for (let product of list) {
    dispElem[0].innerHTML +=
      '<li id="' +
      product +
      '" onClick = "mark(' +
      product +
      ')">' +
      product +
      "</li>";
  }
  dispElem[0].innerHTML += "</ul>";
}

// for (let x = 0; x < list.length; x++) {
//   console.log(list[x]);
// }

// Intro to the for of loop

// for (let product of list) {
//   console.log(product);
// }
