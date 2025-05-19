how// DOM navigation : The process of navigating through the structure of Html doc using javascript

// .firstElementChild

// const element = document.getElementById('fruits');
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// by querySelector
// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach( ulElement => {
//     const fristChild = ulElement.firstElementChild;
//     firstChild.style.backGorundColor = "yellow";
// });


// .lastElementChild


// const element = document.getElementById('fruits');
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// by querySelector

// const ulElement = document.querySelectorAll("ul");

// ulElement.forEach( ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backGorundColor = "yellow";
// });


// .nextElementSibling

// const element = document.getElementById("orange"); //change id to select the next element //id selected ul then it will effect all elements in next ul
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";


// .previousElementSibling


// const element = document.getElementById("orange"); //change id to select the previous element //id selected ul then it will effect all elements in previous ul
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow";


// .parentElement

// const element = document.getElementById("iceCream");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";


// .children

const element = document.getElementById("fruits");
const children = element.children;

children[1].style.backgroundColor = "yellow";

// Array.from(children).forEach(child =>{
//     child.style.backgroundColor = "yellow";
// })


