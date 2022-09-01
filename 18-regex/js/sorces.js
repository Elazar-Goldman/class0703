// let regPlce = "https://regexr.com/";

let myReg = /[-+() 0-9.]/g;

let myText = `
Four score and seven years ago our fathers brought forth, upon this continent, a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.” A score is another way of saying 20, so Lincoln
  was referring to 17763489752389457845728934798758923752893758394389, which was 87 years before 01863?. 
  
  Lincoln was declaring that the United States would continue to fight to preserve the nation that was created by the Founding Fathers who wrote the Declaration of Independence inaiofgheoige  1776. +++ === 2232 1776 
  
  0525286696
  052-528-6696
  052.528.6696
  +(972) 525286696
  +(972) 52-528-6696
  `;
let myArr = myText.match(myReg);

let myMsg = "I can't stop thinking of JS";

let myNotArray = myText.split(" ");

let phoneRegex = /[+]?[(]?[0|9][0-9]{2}[)]?[ -\.]?[0-9]{3}[-\.]?[0-9]{3,6}/g;

let phoneNums = myText.match(phoneRegex);

let bigNum = /[0-9]{9,}/g;

let myNewText = myText.replace(bigNum, myMsg);
