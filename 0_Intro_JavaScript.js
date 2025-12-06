// ============================================
// JAVASCRIPT FUNDAMENTALS - QUICK REFERENCE
// ============================================
// 1. VARIABLES - Store data
var name = "John";           // Old way (avoid)
let age = 25;                // Block-scoped (preferred)
const city = "New York";     // Cannot be reassigned

// 2. DATA TYPES
let number = 42;
let decimal = 3.14;
let text = "Hello";
let isActive = true;
let empty = null;
let notDefined = undefined;

// 3. OPERATORS
let sum = 10 + 5;
let product = 10 * 5;
let comparison = 10 > 5;     // true
let equal = 10 === "10";     // false (strict equality)

// 4. STRINGS
let greeting = "Hello " + name;
let template = `Welcome, ${name}!`;  // Template literals

// 5. ARRAYS
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);      // "apple"
fruits.push("grape");        // Add element

// 6. OBJECTS
let person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log(person.name);    // "John"

// 7. CONDITIONAL
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 8. LOOPS
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 9. FUNCTIONS
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 10. ARROW FUNCTION
const add = (a, b) => a + b;
console.log(add(5, 3));      // 8