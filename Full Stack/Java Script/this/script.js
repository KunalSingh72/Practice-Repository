// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function() {console.log(`Hi! I am ${this.name}`)}, // this = person1
    eat: function() {console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();