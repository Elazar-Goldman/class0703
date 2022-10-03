console.log('Hello');


type userWish = "make-str" | "make-num" 
type allInput = number | string
let sum =(num1:number| string, num2: allInput , wish: userWish) : allInput =>{
if(typeof num1==="number" && typeof num2==="number" || wish=== "make-num"){
    return +num1 + +num2
}else{
    
    return num1.toString() + num2.toString()
}

}

let myRes = sum(2,3, "make-num" )
let myResStr = sum("Hello ","Amiren", "make-str")

console.log(myRes);
console.log(myResStr);
console.log(typeof "make-str");


console.log("If this works we go to brake");
