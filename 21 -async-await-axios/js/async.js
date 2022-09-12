// IS another way to make a promise
// what is imprortent is that it is Asynchronse

let regCalc = (num1, num2) => {
  return num1 + num2;
};

let myRes = regCalc(2, 5);

let coolCalc = async (num1, num2) => {
  return num1 + num2;
};

coolCalc(2, 4)
  .then((data) => {
    console.log(data);
  })
  .catch();

let elem = document.getElementById("root");

let changeColor = (color, time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let myrand = Math.random();
      console.log(myrand);
      if (myrand > 0.1) {
        elem.style.backgroundColor = color;
        res({ status: 200, msg: "Very good you are hving a lucky day" });
      } else {
        rej({ status: 404, msg: "Very bad you are hving a unlucky day" });
      }
    }, time);
  });
};

// changeColor("red", 500)
//   .then((data) => changeColor("orange", 2000))
//   .then(() => changeColor("green", 1000))
//   .then(() => changeColor("yellow", 1000))
//   .then((data) => changeColor("hotpink", 2000))
//   .then(() => changeColor("aque", 1000))
//   .then(() => changeColor("blue", 1000))
//   .then((data) => changeColor("skyblue", 2000)) //promise
//   .then(() => changeColor("green", 1000)) //promise
//   .then(() => changeColor("yellow", 1000))
//   .then(() => changeColor("yellow", 1000))
//   .then((data) => changeColor("orange", 2000))
//   .then(() => changeColor("green", 1000))
//   .then(() => changeColor("yellow", 1000))
//   .catch((err) => {
//     console.log("NNOOOOOOOOOOO  We didnt do it !!!!!");
//   })
//   .finally(() => {
//     console.log("I am in finaly");
//   });

// key word await
let startChange = async () => {
  await changeColor("red", 1000);

  await changeColor("green", 1000);

  await changeColor("red", 1000);

  await changeColor("green", 1000);

  console.log("I am in the code");

  await changeColor("red", 1000);

  if (elem.style.backgroundColor === "red") {
    throw new Error();
  }

  await changeColor("green", 1000);
  await changeColor("red", 1000);
  await changeColor("green", 1000);
  await changeColor("red", 1000);
  await changeColor("green", 1000);
  await changeColor("red", 1000);
  await changeColor("green", 1000);
};

startChange().catch((err) => {
  console.log("that didnt work");
  console.log(err);
});

let calc = (num, num2) => {
  return num + num2;
};

let myCalc = async (num, num2) => {
  return num + num2;
};

setTimeout(() => {
  console.log("in set time out");
}, 0);

myCalc(2, 3)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("That didnt work");
  });
