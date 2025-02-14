// Static = keyword that defines properties or methods that belong to a class itself rather than objects created from that class (class owns anything static, not the ojects)

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getcircumference(radius){
//         return this.PI * radius;
//     }
// }

// const MathUtil1 = new MathUtil();

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getcircumference(10));

// --------------------------------------

class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${this.userCount} online!!`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.userName}`)    
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");

user1.sayHello();
user2.sayHello();
User.getUserCount()

// console.log(user1.userName);
// console.log(user2.userName);
// console.log(User.userCount);