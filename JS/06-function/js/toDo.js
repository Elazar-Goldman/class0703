let count = 0;
let elem = document.getElementById("score");

function add() {
  if (count >= 5) {
    count = 0;
  }
  count++;
  elem.innerHTML = count;
}

function minus() {
  count--;
  if ((count === 0)) {
    count = 5;
  }

  elem.innerHTML = count;
}
