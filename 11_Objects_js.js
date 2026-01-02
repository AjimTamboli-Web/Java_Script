// Object Literal
const person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

console.log(person.name); // John
console.log(person.greet()); // Hello, I'm John

// Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const car = new Car("Toyota", "Camry");
console.log(car.brand); // Toyota

// Object Methods
const obj = { a: 1, b: 2, c: 3 };

// Object.keys() - get all keys
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// Object.values() - get all values
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries() - get key-value pairs
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// Object.assign() - merge objects
const merged = Object.assign({}, obj, { d: 4 });
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// ES6 Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound

 
// Inheritance
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }                       
}
const myDog = new Dog("Rex");
myDog.speak(); // Rex barks

// Object Destructuring
const { name, age } = person;
console.log(name); // John
console.log(age); // 30 
// Nested Destructuring
const nestedObj = {
    id: 1,
    details: {
        address: {
            street: "123 Main St",
            city: "New York"
        }
    }
};





