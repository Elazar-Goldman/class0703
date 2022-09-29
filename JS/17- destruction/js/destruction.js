let myNums = [1,2,3,4,5,6,7];
// withe this i bult a new pointer
let hisNums = myNums;



console.log(myNums[2]);

let myFirst = myNums[0];
let mySecond = myNums[1];

let [bob, charlie , , forth] = myNums;

console.log(bob, charlie, forth);
let animlsArr = ["dog", "cat", "fish"];
animlsArr.push("ant");


// this creates a new array
let coolNums = [...myNums , ...animlsArr, "Hello"];

myNums[3] = "Hello World !";


let catInd =  coolNums.indexOf("cat");
console.log(catInd);
coolNums[catInd] = "Laperd";

let killer = {
    type: "dog",
    name: "kiler",
    legs :  3
}

// Destruciton of Objects 

// name as nickName, this is to change the name of the varable. 
// 

 let { type, name:nickName , legs:feet=4, favFood = "Dogly" } = killer

 console.log(killer);
 console.log(type);
 console.log(nickName);
 console.log(feet);
 console.log(favFood);

 // we use this for eximple when reciving an object from a form

let warren =   {
    fName: "Warren",
    lName: "Buffett",
    worth: "$84B",
    birth_year: "1931",
    source: "Berkshire Hathaway",
    country: "USA",
    image:
      "https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806",
  } 

  // this creates a new variable and gives the variable a value

  let {name, image, worth:value, favHumenFood="beens"} = warren;

let myName = "Eli";

function mySum(){
console.log(arguments.length);
for(let x= 0; x<arguments.length;x++){

}
}

let resolt = mySum(1,2,3,4,5, "Bob");
let resolt2 = mySum(100,209,2398);

// arguments is not availble in arrow functions

// let anotherSum =()=>{
//     console.log(arguments);
// }

// let anotherRes = anotherSum(1,2,3)

// REST, it is alll the arguments that were not specfied, will be contained in array. 

let myFunc = (gold, siver, brons, ...rest)=>{
    console.log(gold);
    console.log(siver);
    console.log(brons);

    console.log(rest);
}

myFunc(...coolNums)

// destuctioning of an objct in the periters of the function

let printName=({fName,lName})=>{
    console.log(`your name is ${fName} - ${lName}`);


}

printName(warren)