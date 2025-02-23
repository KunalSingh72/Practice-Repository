/*
classList = Element property in Javascript to interact with an element's list of classes (css classes)
// Allows you to make reusable classes for many elements across your webpage
*/

let buttons = document.querySelectorAll('.myButtons');

buttons.forEach(button => {
    button.classList.add('enabled');
})
 
buttons.forEach(button => {
    button.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover');
    });
});
buttons.forEach(button => {
    button.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover');
    });
});

buttons.forEach(button => {
    button.addEventListener('click', event => {

        if(event.target.classList.contains('disabled')){
            event.target.textContent +="🥴"
        }
        else{
            event.target.classList.replace('enabled', 'disabled');
        }
});
});