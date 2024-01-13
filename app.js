let skill1 = document.getElementById("1st");
let skill2 = document.getElementById("2nd");
let skill3 = document.getElementById("3rd");
let skill4 = document.getElementById("4th");
let circleContainer = document.getElementsByClassName("circleContainer");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

setInterval(()=>{
    if(counter1 == 90)
    {
        clearInterval;
    }
    else{
        counter1+=1;
        skill1.innerHTML = `${counter1}%`;
    }
}, 20)
setInterval(()=>{
    if(counter2 == 75)
    {
        clearInterval;
    }
    else{
        counter2+=1;
        skill2.innerHTML = `${counter2}%`;
    }
}, 22)
setInterval(()=>{
    if(counter3 == 70)
    {
        clearInterval;
    }
    else{
        counter3+=1;
        skill3.innerHTML = `${counter3}%`;
    }
}, 25)
setInterval(()=>{
    if(counter4 == 50)
    {
        clearInterval;
    }
    else{
        counter4+=1;
        skill4.innerHTML = `${counter4}%`;
    }
}, 32)

const icon = document.getElementById("menuIcon");
const mobNav = document.getElementById("mobnav");
let shown = false;
icon.addEventListener('click', ()=>{
    if(shown === false){
        mobNav.classList.remove("hide");
        shown = true;
    }
    else{
        mobNav.classList.add("hide");
        shown = false;
    }
})


