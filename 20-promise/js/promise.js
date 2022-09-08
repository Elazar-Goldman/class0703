let elem = document.getElementById("root");

let changeColor = (color, time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let myrand = Math.random();
      console.log(myrand);
      if (myrand > 0.09) {
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

// let calc = (num, num2) => {
//   return num + num2;
// };
// calc(10, 5); // 15

