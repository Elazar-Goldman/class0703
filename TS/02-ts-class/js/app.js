var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Teacher = /** @class */ (function () {
    function Teacher(name, age) {
        this.subjects = [];
        this.cities = [];
        this.name = name,
            this.age = age;
    }
    Teacher.prototype.addSubject = function (sub) {
        this.subjects.push(sub);
    };
    Teacher.prototype.changeAge = function (age) {
        this.age = age;
    };
    Teacher.prototype.callAdd = function (subject, pw) {
        if (pw === "070322") {
            this.addSubject(subject);
        }
        else {
            console.log("go away ".concat(this.name, " you bad man"));
        }
    };
    Teacher.prototype.addCity = function (city) {
        this.cities.push(city);
    };
    Teacher.subjectLength = function (firstT, secondT) {
        return Math.max(firstT.subjects.length, secondT.subjects.length);
    };
    return Teacher;
}());
var Elazar = new Teacher("Elazar", 30);
var Tom = new Teacher("Tom", 48);
Tom.changeAge(34);
Elazar.callAdd("html", "070322");
Tom.callAdd("Css", "070320");
console.log(Tom);
var bigSubject = Teacher.subjectLength(Elazar, Tom);
console.log(bigSubject);
var TAs = /** @class */ (function (_super) {
    __extends(TAs, _super);
    function TAs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TAs.prototype.chiledCity = function (city) {
        this.cities.push(city);
    };
    TAs.prototype.subCity = function (sub) {
        this.subjects.push(sub);
    };
    return TAs;
}(Teacher));
Elazar.addCity("Jerusalem");
var Karim = new TAs("Karim", 22);
console.log(Elazar);
Karim.addCity("Jerusalem");
console.log(Karim);
Elazar.cities;
Karim.cities;
