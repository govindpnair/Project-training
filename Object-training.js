// 1. Creating objects in different ways
let obj1 = {}; // object literal
let obj2 = new Object(); // using constructor

// 2. Adding properties and values
obj1.name = "John";
obj1["age"] = 30;

// 3. Nested objects
obj1.address = {
    street: "123 Main St",
    city: "New York"
};

// 4. Object method and 'this' keyword
obj1.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// 5. Accessing nested values
console.log(obj1.address.city); // New York

// 6. Using method
obj1.greet(); // Hello, my name is John

// 7. Destructuring
const { name, age, address } = obj1;
console.log(name, age); // John 30

// 8. Iterating over object properties
for (let key in obj1) {
    if (typeof obj1[key] !== 'function') {
        console.log(`${key}: ${JSON.stringify(obj1[key])}`);
    }
}

// 9. Object.keys, values, entries
console.log(Object.keys(obj1)); // [ 'name', 'age', 'address', 'greet' ]
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

// 10. Cloning objects
let clone = Object.assign({}, obj1);
clone.name = "Jane";
console.log(clone.name); // Jane
console.log(obj1.name);  // John

// 11. Object.freeze (makes object immutable)
Object.freeze(obj1);
obj1.age = 35; // This will not change age
console.log(obj1.age); // Still 30

// 12. Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log(`Hi, I’m ${this.name}, ${this.age} years old.`);
    };
}
let person1 = new Person("Alice", 25);
person1.introduce();

// 13. Classes (ES6 syntax)
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    showDetails() {
        console.log(`${this.brand} ${this.model}`);
    }
}
let car1 = new Car("Toyota", "Corolla");
car1.showDetails();

// 14. Prototypes
Person.prototype.sayBye = function() {
    console.log(`${this.name} says goodbye.`);
};
person1.sayBye();

// 15. Check if property exists
console.log("name" in obj1); // true

// 16. Optional chaining
console.log(obj1?.address?.zipCode); // undefined (no error)

