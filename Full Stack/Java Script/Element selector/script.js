// element selector = methods used to tarhet and manupulate HTMl elements
// They allow you to select one or more multiple HTML elements from the DOM 

// document.getElementById() // Element or NUll (return)

// const myHeading = document.getElementById('my-heading');

// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// ========================================
// document.getElementsByClassName()  // HTML collection

// const fruits = document.getElementsByClassName('fruits');  //kind of array

// fruits[0];

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

// fruits.forEach(); //error

// Array.from(fruits).forEach(fruit => {

//     fruit.style.backgroundColor = "yellow";
// }); //new Array

// console.log(fruits);

// ====================================================
// document.getElementsByTagName()  // HTML collection


// const h4Elements = document.getElementsByTagName('h4');

// h4Elements[0].style.backgroundColor = "yellow";

// for(let h4 of h4Elements){
//     h4.style.backgroundColor = "yellow";
// }

// const liElements = document.getElementsByTagName('li');


// for(let li of liElements){
//     li.style.backgroundColor = "lightgreen";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     HTMLMeterElement.style.backgroundColor = "yellow";
// })

// console.log(h4Elements);

// ===================================================
// document.querySelector()  // element or Null


// const element = document.querySelector(".fruits"); //only first match selected

// element.style.background = 'yellow';



// =====================================================
// document.querySelectorAll()  // Nodelist //STATIC (doesnot update in DOm)

const fruits = document.querySelectorAll('.fruits');

fruits[0].style.backgroundColor = "yellow";