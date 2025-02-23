// Callback Hell = Situation in Js where callbacks are nested within other callbacks to the degree where the code is difficult to read.
// Old pattern to handle asynchronous functions
// Use promises + asnc/await to avoid callback hell

// callback Hell
function task1(callback){
    setTimeout(()=>{
    console.log("Task 1");
    callback();
    }, 2000);
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 1");
        callback();
        }, 3000);
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task 1");
        callback();
    }, 1000);
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task 1");
        callback();
    }, 1500);
}
task1(() => {
    task2(() => {
        task3(() => {
            task4(() =>{
                console.log("Complete");
            });
        });
    });
});

