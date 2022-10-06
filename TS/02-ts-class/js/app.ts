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


class Teacher{
   name:string;
   
   private age:number; 
 private subjects: string[] = []

 protected cities : string[] =[]


    constructor(name:string, age: number){
        this.name = name, 
        this.age = age
    }

 private addSubject(sub:string){
    this.subjects.push(sub)
}  

public changeAge(age:number){
    this.age = age
}  

callAdd(subject:string, pw:string){
if(pw==="070322"){
    this.addSubject(subject)
}else{
    console.log(`go away ${this.name} you bad man`);
    
}
}

 addCity(city:string){
this.cities.push(city)
}
static subjectLength(firstT, secondT){
    
 return Math.max(firstT.subjects.length, secondT.subjects.length,)   
}
}

let Elazar = new Teacher("Elazar", 30 )
let Tom = new Teacher("Tom", 48)

Tom.changeAge(34)

Elazar.callAdd("html","070322")
Tom.callAdd("Css", "070320")

console.log(Tom);

let bigSubject = Teacher.subjectLength(Elazar, Tom )

console.log(bigSubject);

class TAs extends Teacher{
 
    chiledCity(city:string){
       this.cities.push(city) 
    }
    subCity(sub:string){
       this.subjects.push(sub) 
    }
}
Elazar.addCity("Jerusalem")
let Karim = new TAs("Karim", 22);

console.log(Elazar);

Karim.addCity("Jerusalem")
console.log(Karim);

Elazar.cities
Karim.cities