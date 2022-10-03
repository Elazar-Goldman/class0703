console.log('Hello');
var sum = function (num1, num2, wish) {
    if (typeof num1 === "number" && typeof num2 === "number" || wish === "make-num") {
        return +num1 + +num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
};
var myRes = sum(2, 3, "make-num");
var myResStr = sum("Hello ", "Amiren", "make-str");
console.log(myRes);
console.log(myResStr);
console.log(typeof "make-str");
console.log("If this works we go to brake");
