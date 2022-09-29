  import {UserMaker , LocalStoreSavior, getFromStore} from './helpers.js'

console.log('ehhiuh')

const OURUSERS = [];

let myForm = document.getElementById('my-form');

myForm.addEventListener('submit',(evt)=>{
evt.preventDefault();
let uName = document.getElementById('name')
let uEmail = document.getElementById('email')
let uPass = document.getElementById('pass')

UserMaker(uName.value,uEmail.value,uPass.value, OURUSERS);

LocalStoreSavior(OURUSERS, "ourUsers", OURUSERS.length)

 uName.value="";
 uEmail.value=""; 
 uPass.value="";
console.log(OURUSERS);
})

console.log(OURUSERS);

let myUsers = getFromStore("ourUsers")

console.log(myUsers);

let myDog={
    name:"lacy",
    age:3,
    color:"white"
}



console.log(myUsers[1]); 