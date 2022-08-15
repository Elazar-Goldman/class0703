let myNums = [1,2,3,4,5,6,7];
// withe this i bult a new pointer
let hisNums = myNums;



console.log(myNums[2]);

let myFirst = myNums[0];
let mySecond = myNums[1];

let [bob, charlie , , forth] = myNums;

console.log(bob, charlie, forth);
let animlsArr = ["dog", "cat", "phish"];
animlsArr.push("ant");


// this creates a new array
let coolNums = [...myNums , ...animlsArr, "Hello"];

myNums[3] = "Hello World !";


let catInd =  coolNums.indexOf("cat");
console.log(catInd);
coolNums[catInd] = "Laperd";