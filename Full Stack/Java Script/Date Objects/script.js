// Date(year, month, day, hour, minut, second, ms)

const date = new Date();

// const date = new Date(2024, 0, 1, 2, 3, 4, 5);

// const date = new Date("2024-01-02T12:00:00Z");

// const date = new Date(1700000000000); //timer


// const year = date.getFullYear();

// const month = date.getMonth();

// const day = date.getDate();

// const hour = date.getHours();

// const minutes = date.getMinutes();

// const seconds = date.getSeconds();


// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);

// set
// date.setFullYear(2024);
// date.setMonth(0); // january
// date.setDate(1);
// date.setHours(2);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date1 < date2){
    console.log('Happy New Year!!');
}
