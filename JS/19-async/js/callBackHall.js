let elem = document.getElementById("root");

let colorChanger = (color, time, callBack, err) => {
  setTimeout(() => {
    elem.style.backgroundColor = color;
    let rand = Math.random();
    console.log(rand);
    rand > 0.3 ? callBack() : err();
  }, time);
};

colorChanger(
  "red",
  500,
  () => {
    colorChanger(
      "orange",
      1000,
      () => {
        colorChanger(
          "green",
          1000,
          () => {
            colorChanger("blue", 1000);
          },
          console.log("there was a problem green")
        );
      },
      console.log("there was a problem orange")
    );
  },
  () => {
    console.log("there was a problem red");
  }
);
