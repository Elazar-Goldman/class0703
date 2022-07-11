function addItem() {
    // I can pick up the value of the input in one line
  let newItem = document.querySelector("#item").value;
  // or I can have 2 steps one to pick up the html item, and one for the value 
//   let newItem = document.querySelector("#item");
//   let val = newItem.value;
  console.log(newItem);
}
