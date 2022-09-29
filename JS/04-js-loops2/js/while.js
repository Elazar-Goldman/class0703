console.log("Hello World");

let x = 22;
// risk of entering a endless loop

while (x < 29) {
  console.log(x);
  x++;
}

// print with while loop number 22 -28

// please prompt the user to eneter his name
// if the user's name is Brady please give him all of the goodness in the world
// if not please propt the user again to give you a name

let userName = prompt("What is your name?", "Please enter name");

while (userName.trim().toLowerCase() !== "brady") {
    
    userName = prompt("Try again?", "You can do better");
}

console.log("My man Brady, here are all the riches ");
