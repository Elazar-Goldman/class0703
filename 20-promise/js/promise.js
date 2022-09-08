let elem = document.getElementById("root");

let changeColor = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let myrand = Math.random();
      if (myrand > 0.49) {
        res();
      } else {
        rej();
      }
    }, 1000);
  });
};

changeColor()
  .then(() => {
    console.log("YAYYYYYYYY WE DID IT");
  })
  .catch(() => {
    console.log("NNOOOOOOOOOOO  We didnt do it !!!!!");
  })
  .finally(() => {
    console.log("I am in finaly");
  });
