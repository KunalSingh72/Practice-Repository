// Syncronous = Executes line by line consecutively in a sequential manner 
// Code that waits for an operation to complete

// Asyncronous = Allows multiple operations to be performed concurrently without waiting
// Doesn't block the execution flow and allows the program to continue
// (I/O operations, network req, fetching data)
// Handled with : Callbacks, Promises, Async/Await


// async handled

function func1(callback){
    setTimeout(() => {console.log("Task1")
                        callback();
    }, 3000);
}
function func2(){

    // console.log('Task 1');
    console.log('Task 2');
    console.log('Task 3');

}

func1(func2);