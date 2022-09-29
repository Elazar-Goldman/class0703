let elem = document.getElementById("root");
let elem2 = document.getElementById("root-again");
let rgbaMaker = () => {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let a = Math.random();

  return `rgba(${r},${g},${b},${a})`;
};

// a function with setTimeOut

// let changeColor = () => {
//   setTimeout(() => {
//     elem.style.color = rgbaMaker();
//     elem.style.backgroundColor = rgbaMaker();
//   }, 2000);
// };

// this is to show the callStack
let gretings = (name) => {
  console.log(`hello there ${name}`);
};
let add = (a, b) => {
  gretings("Moshe");
  return a + b;
};

let avrage = (a, b) => {
  return add(a + b) / 2;
};

// webApi puts the function in to the stack what it is time.
setTimeout(() => {
  elem.style.color = rgbaMaker();
  elem.style.backgroundColor = rgbaMaker();
}, 5000);

let myAvg = avrage(10, 20);

for (let x = 0; x < 30000; x++) {
  console.log("Hello To us all", x);
}

setTimeout(() => {
  elem2.style.color = rgbaMaker();
  elem2.style.backgroundColor = rgbaMaker();
}, 2000);


