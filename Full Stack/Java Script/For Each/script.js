// forEach() = Method used to iterate over the elements of an arrat and apply a specified funtion (Call Back) to each element

//  array.forEach(callback)
// element, index , array are provided when callback funciton is called by forEach()


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// // numbers.forEach(triple);
// numbers.forEach(display);

// function display(element){
//     console.log(element);
// }

// function double(element, index , array){
//     array[index] = element * 2;
// }

// function triple(element, index , array){
//     array[index] = element * 3;
// }


let fruits = ['apple', 'mango', 'banana', 'coconut'];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}