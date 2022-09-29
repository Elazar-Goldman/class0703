let elems = document.querySelectorAll(".data");

console.log(elems);

let myArr = [];

// dont need this loop
elems.forEach((elem) => myArr.push(elem));

// makes an array from a node list
let arrDiv = Array.from(elems);

arrDiv.map((elem) => {
  elem.addEventListener("click", (evt) => {
    let myDiv = evt.target;

    let myIndex = parseInt(myDiv.dataset.index);
    console.log(typeof myIndex);

    arrDiv.splice(myIndex, 1);
  });
});

let bob;