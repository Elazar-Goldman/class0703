//fetch

let url = "http://fs1.co.il/bus/bitcoin.php";

fetch(url)
  .then((response) => {
    response.json().then((data) => {
      doSomething(data);
    });
  })
  .catch();

let doSomething = (array) => {
  array.forEach((element) => {
    console.log(element.name);
  });
};
