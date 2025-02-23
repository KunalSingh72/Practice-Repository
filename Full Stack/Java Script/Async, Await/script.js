// Async = Makes a function return a promise
// Await = makes a async function wait for promise
// Allows you write asynchronous code in a sunchronous manner
// Aync doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

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

async function doChores(){
    try
    {const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log('Finished!');}

    catch(error){
        console.error(error);
    }
}

doChores();