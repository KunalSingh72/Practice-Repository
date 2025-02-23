// Error = An object that is created to represent a problem a problem that occurs
// Occur often with user input or establishing a connection 
// network errors
// Promise Rejection
// Security Errors

// try { } = Encloses code that moght potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes used mostly for clean up
// Ex. close files, Close connections, release resources

// try{
//     console.log(x);
// }

// catch(error){   
//     console.error(error);
// }
// finally{
//     console.log("Finally!!");
// }

// console.log("You have reached the end!");

// ======================================

try{
    const dividend = window.prompt("Enter a dividend: ");
    const divisor = window.prompt("Enter a divisor: ");

    if(divisor == 0){
        throw new Error("You can't divided by zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Value must be a number")
    }

    const result = dividend / divisor;
    console.log(result);
}

catch(error){
    console.log(error);
}

console.log("end");