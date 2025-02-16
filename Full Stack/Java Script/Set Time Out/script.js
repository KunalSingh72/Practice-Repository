// setTimeout() = function in Js that allows you to schedule
// the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the JS runtime env.)

// setTimeout(callbacks, delay);

// function sayHello(){
//     console.log('Hello');
// }

// const timeoutID = setTimeout(sayHello, 3000);




// // clearTimeout(timeoutId) = can cancl a timeout before it triggers

// clearTimeout(timeoutID); // canceling the time out

// =============================================

let timeoutID;

function startTimer(){
    timeoutID = setTimeout(() => {
        window.alert('Hello');
    }, 3000);
}


function clearTimer(){
    clearTimeout((timeoutID) => {
        window.alert('Hello');
    }, 3000);
}