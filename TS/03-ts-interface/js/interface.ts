console.log("Trying this again");
// interface
interface GreetMe {
    name: string,
    grade: number,

    greet(): void
}

let Karim : GreetMe;


Karim ={
    name:"Karim",
    grade: 70,
   

    greet(){
        console.log(`Heello there to ${this.name}`);
       
    }
}


interface StudenInfo {
    city:string,
  
    subjects: string[]
}

class NewStudent implements GreetMe,StudenInfo {
    name: string
    grade: number
    city: string
    private id: number
    subjects : string []
    constructor(name:string, grade:number,  city: string, protected happyLevel?: number, ){
        this.name = name,
        this.happyLevel = happyLevel
        this.city = city
        this.id = Math.floor(Math.random()* 10000)
        this.subjects = []
        this.grade = grade
    }

    greet(): void {
        console.log(`hello there ${this.name}, your grade is ${this.grade}`);
        
    }

    changeHappy(){
        if(this.happyLevel){
            if(this.happyLevel< 70){
            console.log(`Hello ${this.name} we like to give a $100 vaoture`);
            this.happyLevel = 85 +  Math.floor(Math.random()*15) 
                
            }else{
                console.log(" we are happy that you are happy");
                
            }

            }
}
}
let Yossi = new NewStudent("Yossi", 89, "Hifa", 67)
let Rina = new NewStudent("Rina", 92,"Hifa", 85)


class Hye{
    city: string
    car: string
    constructor(city:string, car:string){
        this.city = city
        this.car= car
    }

    SayHye(name:string){
        console.log(`Hello there to ${name}`);
        
    }
}

class AllGreets{

    SayHye(name:string){
        console.log(`Hello there to ${name}`);
        
    }
    SayBye(name:string){
        console.log(`GoodBye to ${name}`);
        
    }
}

type MyGreetings = Hye| AllGreets


let greet1 = new Hye("Tal-Aviv", "fiat")
let greet2 = new AllGreets()

let whoToGreet =(greetObj:MyGreetings , val:string)=>{

greetObj.SayHye(val)

if(greetObj instanceof AllGreets){

    greetObj.SayBye(val)
}

}

let printCity =(gret:MyGreetings)=>{
    if("city" in gret){
        console.log(gret.city);
    }

}

whoToGreet(greet2, "Eli")

let myObj =  Object.keys(greet1)

console.log(myObj);

