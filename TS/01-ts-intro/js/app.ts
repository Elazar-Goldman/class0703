let first = document.getElementById("first") ! as HTMLInputElement;
let second = document.getElementById("second") ! as HTMLInputElement;
let myBtn = document.getElementById("btn") as HTMLButtonElement;

let Mybob =(num1, num2)=>{
    return num1 *num2
}

let addtion = (num1:number, num2:number) : number => {
  console.log(num1 + num2);
return num1 + num2
};

// to ways of changing string to number
myBtn.addEventListener("click", () => {
  addtion(+first.value,parseInt(second.value));
});

let myNum = +"5"

console.log(typeof myNum);

let user : string;

user = "bob"
// this one throws an error
// user= 8

let newUserNumer: number;

// this will throw an errow 
// newUserNumer = "marly";

newUserNumer = 9;

let flag : boolean;

flag = true;

// enum 

enum Place {Jerusalem=2, TalAviv, Haifa}

let teacher : {
    name:string,
    id:number,
    subjects: string[],
    // this is called tuple
    role: [number, string]
    loc: Place

} ={
    name:"Eli",
    id:101,
    subjects:["HTML","CSS","JS","TS"],
    role: [0,"Admin"],
    loc: Place.Haifa
}

teacher.role= [2,"Read-only"]
teacher.role.push("vov")

let myFunc =(num:number, num2:number) : number=>{
   return num+ num2 
}
// this will throw an error 
// myFunc = Mybob
myFunc = addtion
console.log(myFunc(12,2));
