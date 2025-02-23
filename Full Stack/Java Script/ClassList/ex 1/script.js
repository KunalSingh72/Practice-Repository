/*
classList = Element property in Javascript to interact with an element's list of classes (css classes)
// Allows you to make reusable classes for many elements across your webpage

add()
remove()
toggle()
replace()
contains()
*/
const myH1 = document.getElementById('myH1');
const myButton = document.getElementById('myButton');

// myButton.classList.add('enabled');
// myButton.classList.remove('enabled');

// myButton.addEventListener('mouseover', event => {
//     // event.target.classList.add('hover');
//     event.target.classList.toggle('hover');

// });

// myButton.addEventListener('mouseout', event => {
//     // event.target.classList.remove('hover');
//     event.target.classList.toggle('hover');
// });

myH1.classList.add('enabled');
myButton.classList.add('enabled');

myH1.addEventListener('click', event => {

    if(event.target.classList.contains('disabled')){
        event.target.textContent += "🥴";
    }
    else{
    event.target.classList.replace('enabled', 'disabled');   
    }
});

myButton.addEventListener('click', event => {

    if(event.target.classList.contains('disabled')){
        event.target.textContent += "🥴";
    }
    else{
    event.target.classList.replace('enabled', 'disabled');   
    }
});