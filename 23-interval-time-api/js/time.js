window.onload = () => {
  init();
};
// this is Offer Shally's method
let init = () => {
  let elem = "";
  let myYear = document.getElementById("year");
  let time = new Date();
  //   // get day start from 0
  //   let myDay = time.getDay();
  //   console.dir(time);
  //   console.log(myDay);

  let myMonth = time.getMonth();
  console.log(myMonth + 1);
  console.log(time);
  let epoch = time.getTime();
  console.log(epoch);

  let myNewTime = new Date(epoch);

  let startOfClass = 1000 * 60 * 60 * 2.5;
  let realStart = epoch - startOfClass;
  let myOldTime = new Date(realStart);

  let thisYear = time.getFullYear();
  console.log(thisYear);
  console.log(myNewTime);
  console.log(myOldTime);

  myYear.innerHTML = thisYear;
  // Epoch is date, and its all the miloseonds from march 01 of 1970 London
};
