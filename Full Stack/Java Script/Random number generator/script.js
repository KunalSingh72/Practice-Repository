const Button = document.getElementById("myButton");
const label1 = document.getElementById("myLabel1");
const label2 = document.getElementById("myLabel2");
const label3 = document.getElementById("myLabel3");

const min = 1;
const max = 6;


Button.onclick = function(){
    let randomNum1 =Math.floor(Math.random()* max) + min;
    let randomNum2 =Math.floor(Math.random()* max) + min;
    let randomNum3 =Math.floor(Math.random()* max) + min;
    
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

}