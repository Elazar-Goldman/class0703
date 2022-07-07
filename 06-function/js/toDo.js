let count = 0;
let elem = document.getElementById("score");
function add() {
  if (count > 5) {
    count = 0;
  }

  elem.innerHTML = count;
}
