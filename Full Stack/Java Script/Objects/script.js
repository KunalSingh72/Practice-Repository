// Object = A collection of related properties and/or methods can represent real world objects (people, products, places)

// object = {key:value, function}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployee: true,
    sayHello: () => {console.log("Hi! I am Spongebob.")},
    eat: () => {console.log("I am eating Krabby Patty.")}
}

// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.sayHello();
person1.eat();


const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 32,
    isEmployee: false,
    sayHello: function(){console.log("Hey, I'm Patrick...")},
    eat: function(){console.log("I am eating Chicken.")}
}

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// person2.sayHello();
person2.eat();