console.log("Trying this again");
var Karim;
Karim = {
    name: "Karim",
    grade: 70,
    greet: function () {
        console.log("Heello there to ".concat(this.name));
    }
};
var NewStudent = /** @class */ (function () {
    function NewStudent(name, grade, city, happyLevel) {
        this.happyLevel = happyLevel;
        this.name = name,
            this.happyLevel = happyLevel;
        this.city = city;
        this.id = Math.floor(Math.random() * 10000);
        this.subjects = [];
        this.grade = grade;
    }
    NewStudent.prototype.greet = function () {
        console.log("hello there ".concat(this.name, ", your grade is ").concat(this.grade));
    };
    NewStudent.prototype.changeHappy = function () {
        if (this.happyLevel) {
            if (this.happyLevel < 70) {
                console.log("Hello ".concat(this.name, " we like to give a $100 vaoture"));
                this.happyLevel = 85 + Math.floor(Math.random() * 15);
            }
            else {
                console.log(" we are happy that you are happy");
            }
        }
    };
    return NewStudent;
}());
var Yossi = new NewStudent("Yossi", 89, "Hifa", 67);
var Rina = new NewStudent("Rina", 92, "Hifa", 85);
var Hye = /** @class */ (function () {
    function Hye(city, car) {
        this.city = city;
        this.car = car;
    }
    Hye.prototype.SayHye = function (name) {
        console.log("Hello there to ".concat(name));
    };
    return Hye;
}());
var AllGreets = /** @class */ (function () {
    function AllGreets() {
    }
    AllGreets.prototype.SayHye = function (name) {
        console.log("Hello there to ".concat(name));
    };
    AllGreets.prototype.SayBye = function (name) {
        console.log("GoodBye to ".concat(name));
    };
    return AllGreets;
}());
var greet1 = new Hye("Tal-Aviv", "fiat");
var greet2 = new AllGreets();
var whoToGreet = function (greetObj, val) {
    greetObj.SayHye(val);
    if (greetObj instanceof AllGreets) {
        greetObj.SayBye(val);
    }
};
var printCity = function (gret) {
    if ("city" in gret) {
        console.log(gret.city);
    }
};
whoToGreet(greet2, "Eli");
var myObj = Object.keys(greet1);
console.log(myObj);
