// NodeList = Static collection of Html element by (id, class, element)
// Can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce) have forEach
// NodeList won't update to automatically reflect changes


let buttons = document.querySelectorAll('.myButton');

// Add Html/Css Properties

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "🥴";
// });

// Click event listener

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";

//     })
// })

// Mouseover + mouseout event listener

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     })
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     })
// });

// Add an element

// const newButton = document.createElement('button'); //step 1 

// newButton.textContent = "Button 5"; //step 2

// newButton.classList = "myButton";
// document.body.appendChild(newButton); //doesn't show in NodeList (static)

// buttons = document.querySelectorAll(".myButton");
 
// remove an element
// buttons.forEach(button => {
//     button.addEventListener('click', event => {
//         event.target.remove();
//         buttons = document.querySelectorAll('.myButton'); //for removing from nodelist
//     })
// })