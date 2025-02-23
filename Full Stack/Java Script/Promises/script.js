// Promise = An object that manages asynchronous operations.
// Wrap a promise object around {asynchronous code}
// "I promise to return a value"
// Pending -> RESOLVED or REJECTED
// new Promise((resolved, reject) => {asynchronous code})

// Do these Chores in order

// 1. Walk the Dog
// 2. Clean the Kitchen
// 3. Take out the Trash

function walkDog(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;
            if(dogWalked){
                resolve('You walk the Dog');                
            }
            else{
                reject("You didn't walk the Dog");
            }

        }, 1500);    
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve('You clean the Kitchen');             
            }
            else{
                reject("You didn't clean the Kitchen");
            }
            
        }, 2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve('You take out the Trash');
            }
            else{
                reject("You didn't take the Trash out");
            }
            
        }, 500);
    });
    
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeOutTrash()})
        .then(value => {console.log(value); console.log('Finished!')})
        .catch(error => console.error(error));


        // If one task is not done then following task will not be done