let types = ["Spades", "Harts", "Clubs", "Dimonds"];
let counter = 0; 
let deck = [];
let deckFlag =[];

// making the card class
class Cards{
    constructor(number, shape, color){
        this.number = number;
        this. shape = shape;
        this.color = color;
    }

       

}

// this challange requires working with while
while(deck.length<52 ){
counter++;
// making randon numbers. 
let randNum = Math.floor((Math.random()*13)+1);
let randIndex = Math.floor((Math.random()*4));
let color = randIndex%2===0 ? "black" :"red";

// prevnts building the same card
let flagVal = `${types[randIndex] + randNum}`

if (deckFlag.includes(flagVal))  continue ;

let card = new Cards(randNum, types[randIndex], color);

// pushing 
deckFlag.push(flagVal);
deck.push(card)

}

console.log(deck);
console.log(deckFlag);
console.log(counter);

