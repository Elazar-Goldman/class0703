let form = document.getElementById('my-form');
let formErr = document.getElementById('erros');
let erros = [];
let fErr =''

console.log(form);

form.addEventListener("submit", (evt)=>{
    let {fName, lName, yooo, password} = form.elements;
    console.log( yooo.value);
    let tempName = fName.value.trim();
    if(tempName.length <2){
        let msg = "You name is wrong"
        erros.push(msg)
        evt.preventDefault();
    }
    let tempNameLname = lName.value.trim();

    if(tempNameLname.length <2){
        let msg = "You last name is wrong"
        erros.push(msg)
        evt.preventDefault();
    }
    
    if(!yooo.value.includes("@")){
        let msg = "incorrect email or password"
        erros.push(msg)
        evt.preventDefault();
    }

    if(password.value.length < 2){
        let msg = "incorrect email or password"
        erros.push(msg)
        evt.preventDefault();
    }

if(erros.length >0 ){
erros.map((err)=>{
formErr.innerHTML += `
<div class="errMsg">
there is a problem with ${err}
</div>
`
})
}
    
    
    evt.preventDefault();
    console.log("You are good to go") ;

})

let myTitle = document.getElementById('title')

myTitle.addEventListener('click', ()=>{
    myTitle.classList.toggle("active")
})

let myName = document.getElementById('fName');

