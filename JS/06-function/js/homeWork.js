let elem = document.getElementById("root");

for (let x = 9; x > 0; x--) {
    // this was responsable for making the row go down
  if (x % 3 === 0) {
    elem.innerHTML += '<div class="inner-div"></div>';
  }
  // coolecting all of the divs
  let allDivs = document.getElementsByClassName("inner-div");
  // this is taking care of the index
  let index = 0;
  if (x <= 6 && x > 3) {
    index = 1;
  } else if (x <= 3 && x > 0) {
    index = 2;
  } else {
    index = 0;
  }

  allDivs[index].innerHTML += x;
}

let myDivs = document.getElementsByClassName("inner-div");
