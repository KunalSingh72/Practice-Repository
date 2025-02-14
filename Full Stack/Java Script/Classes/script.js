// Class = {ES6 feature} provides a more structured and cleaner way to work with objects compared to traditional constructor function
// ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`price: $${this.price}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("pants", 22.50);


console.log(product1.calculateTotal(salesTax).toFixed(2));