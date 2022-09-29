var first = document.getElementById("first");
var second = document.getElementById("second");
var myBtn = document.getElementById("btn");
var Mybob = function (num1, num2) {
    return num1 * num2;
};
var addtion = function (num1, num2) {
    console.log(num1 + num2);
};
// to ways of changing string to number
myBtn.addEventListener("click", function () {
    addtion(+first.value, parseInt(second.value));
});
var myNum = +"5";
console.log(typeof myNum);
var user;
user = "bob";
// this one throws an error
// user= 8
var newUserNumer;
// this will throw an errow 
// newUserNumer = "marly";
newUserNumer = 9;
var flag;
flag = true;
// enum 
var Place;
(function (Place) {
    Place[Place["Jerusalem"] = 2] = "Jerusalem";
    Place[Place["TalAviv"] = 3] = "TalAviv";
    Place[Place["Haifa"] = 4] = "Haifa";
})(Place || (Place = {}));
var teacher = {
    name: "Eli",
    id: 101,
    subjects: ["HTML", "CSS", "JS", "TS"],
    role: [0, "Admin"],
    loc: Place.Haifa
};
teacher.role = [2, "Read-only"];
teacher.role.push("vov");
var myFunc = Mybob;
console.log(myFunc(12, 2));
