// Quiz: OOP

class Animal {
    constructor(name, age, isMammal = true) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }   
}

class Rabbit extends Animal {
    constructor(name, age) {
        super(name, age, true);;

    }

    eat() {
        return `${this.name} sedang makan!`;
    }

}

class Eagle extends Animal {
    constructor(name, age) {
        super(name, age, false);
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit(`Labi`, 2);
const myEagle = new Eagle(`Elo`, 4);
console.log(myRabbit, myEagle);


// Quiz: FP

const sampleProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
  { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
  { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
}

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

function calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price, 0);
}

function applyDiscount(products, discount) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * (discount / 100))
    }));
}

console.log(getProductsByCategory(sampleProducts, 'Electronics'));
console.log(calculateTotalPrice(sampleProducts)); 
console.log(applyDiscount(sampleProducts, 10)); 
console.log(findProductById(sampleProducts, 3));
