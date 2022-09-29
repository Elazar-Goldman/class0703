let students = [];

function makeObj() {
  // this is DOM minpulation
  let studName = document.getElementById("name");
  let stuSubject = document.getElementById("subject");
  let studGrade = document.getElementById("grade");
  let studCar = document.getElementById("car-type");

  // this is how we build on object

  let student = {};

  // Puplating the object
  student.name = studName.value;
  student.subject = stuSubject.value;
  student.grade = studGrade.value;
  student.car = studCar.value;

  console.log(student);

  students.push(student);

  // arasing the values
  studName.value = "";
  stuSubject.value = "";
  studGrade.value = "";
  studCar.value = "";
}

function render() {
  for (let stud of students) {
    let rend = document.getElementById("result");
    rend.innerHTML += '<div class="inner-stud bg-info">';
    rend.innerHTML += `<h3 class="bg-info">Students name is :  ${stud.name} </h3>`;
    rend.innerHTML += `<h3 class="bg-danger">Students  is studing :  ${stud.subject} </h3>`;
    rend.innerHTML += `<div>Students grade is :  ${stud.grade} </div>`;
    rend.innerHTML += `<span>Students car is :  ${stud.car} </span>`;
    rend.innerHTML += "</div>";
  }
}

let myObj = { dog: "lacy", game: "chess" };

console.log(myObj["game"]);

let myArr = [
  ["lacy", "chess"],
  ["dog", "game"],
];

let elem = document.getElementById("result");
console.dir(elem);
