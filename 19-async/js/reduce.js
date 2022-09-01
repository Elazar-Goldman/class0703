let myArr = [];

let numMaker = () => {
  let num = Math.floor(Math.random() * 100) + 1;
  return num;
};

while (myArr.length < 10) {
  let randNum = numMaker();
  myArr.push(randNum);
}

let nonRand = [81, 33, 46, 48, 37, 50, 89, 39, 75, 69];

// reduce makes a new varable
// reduce saves a given state

let sumArr = nonRand.reduce((total, next) => {
  // turnrery oprator
  //   let max = total > next ? total : next;
  return total + next;
});

// very importent length is allwayes the amount of value of the array

let avgArr = sumArr / nonRand.length;
