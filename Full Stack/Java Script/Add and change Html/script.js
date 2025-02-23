// Example 1 <h1>

// Step 1 : Create the ELement

// const newH1 = document.createElement('h1');


// Step 2 : Add Attributes/properties
// newH1.textContent = "I like pizza!";
// newH1.id = 'myH1';
// newH1.style.color = 'red';
// newH1.style.textAlign = 'center';



// Step 3 : Append element to DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById('box1').append(newH1);
// document.getElementById('box1').prepend(newH1);

// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box2); //between box1 and box 2

// without ids
// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1, boxes[1])


// Remove the element
// document.body.removeChild(newH1); // remove outside the box

// document.getElementById('box1').removeChild(newH1);


// Example 2 <li>

// Step 1 : Create the ELement

const newListItem = document.createElement('li');

// Step 2 : Add Attributes/properties
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// Step 3 : Append element to DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
document.getElementById('fruits').append(newListItem);
// document.getElementById('fruits').prepend(newListItem);


// const orange = document.getElementById('orange');
// document.getElementById('fruits').insertBefore(newListItem, orange); 


// without ids
// const listItems = document.querySelectorAll('#fruits li');
// document.getElementById('fruits').insertBefore(newListItem, listItems[1]);

// Remove the element
document.getElementById('fruits').removeChild(newListItem); // remove outside the box
