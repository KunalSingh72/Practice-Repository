// const = a variable that can't be changed

const PI = 3.14;
let radius;
let circumference;



document.getElementById("submit").onclick = function(){
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference;
}
