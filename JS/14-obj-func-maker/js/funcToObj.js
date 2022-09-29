let elem = document.getElementById('root')

let favColor = "";

const objMaker=(name, car, food)=>{
    let obj = {
        name,
        car,
        food
    }
    return obj
}

let person1 = objMaker("Avi", "BMW", "Banna");
let person2 = objMaker("Karim", "fiat", "malon");

// FACTORY FUNCTION 
// factory function make and return for a you an object

function Cars (make, color, age){
 
    this.make = make,
    this.color = color,
    this.age = age

 
}

Cars.prototype.render =  function(){
    elem.innerHTML = `
    <h3>${this.make}  this is you car</h3>
    <h3>${this.color}  this is your cars color</h3>
    `
}
Cars['prototype'].clear =  function(){
    elem.innerHTML =""
}
Cars.prototype.makeMyValue =  function(val,year){
    elem.innerHTML =`
    <h3>${val}  this is you car</h3>
    <h3>${year}  this is your cars color</h3>
    `
}


// this
let myOldCar = new Cars("Fiat", "Rust", "15")
let myNewCar = new Cars("Mazda", "Silver", "8")

console.log(myOldCar);
console.log(myNewCar);
console.log(Cars);

let myArray = ["tom", "Jary" ," mikey"];
let hisArray = new Array;

let myName = new String;


hisArray.push(12)
hisArray.push("ban and my man Jary")
hisArray.push(14)

Array.prototype.pop = function(){
    console.log("BLLBLBLLBLBLLBLBLLL I love this value and I WILL NOT POP IT BBLLBLBLBLBLBL ");
}

let bob = new String;

let ourArray = myArray

ourArray[2] = "Kalcy"
console.log(myArray);