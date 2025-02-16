// Nested Objects = objects inside of onjects;
// Allows you to represent more complex data structuers
// Child object is enclosed by a parent object

// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}



// const person = {
//     fullName: "Spongebob",
//     age: 30,
//     isStudent: true,
//     hobbies : ['karate', 'jellyfishing', 'cooking'],
//     address: {
//         street : '124 Conch St.',
//         city: 'Bikini Bottom',
//         country: 'Int. Water'
//     }
// }

// console.log(person.hobbies[2]);
// console.log(person.address.street);

// for(const property in person.address){
//     console.log(person.address[property]);
// }

// ---------------------------------------------

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){ 
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch", "Bikini Bottom", "Int Waters");


console.log(person1.address.street);

