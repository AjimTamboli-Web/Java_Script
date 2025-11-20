// Operators in JavaScript -> which is works on operands to produce a result.Do some operations on variables and values.


// 1. Arithmetic Operators  -> +, -, *, /, %, **, ++, --

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Exponential opertator which is used to raise the base to the exponent power.
console.log("Exponent:", a ** b);

// Increment and Decrement Operators which is used to increase or decrease the value by 1.
let z = 5;
console.log("Increment:", ++z);
console.log("Decrement:", --z);
// Using post-increment and post-decrement, the current value is returned first, then the increment or decrement operation is performed.
let s = 5;
console.log("Post-Increment:", s++);
console.log("Value after Post-Increment:", s);
console.log("Post-Decrement:", s--);
console.log("Value after Post-Decrement:", s);

// It follows the Bodmas Rule -> Brackets, Orders (i.e. powers and square roots, etc.), Division and Multiplication, Addition and Subtraction.
let result = (a + b) * (a - b) / b;
console.log("Result following Bodmas Rule:", result);


// 2. Assignment Operators -> =, +=, -=, *=, /=, %= also called as shorthand operators

let num = 10;

num += 5;   // num = 15
num -= 3;   // num = 12
num *= 2;   // num = 24
num /= 4;   // num = 6
num %= 4;   // num = 2

console.log("Final value:", num);

// 3. Comparison Operators -> ==, ===, !=, !==, >, <, >=, <= ouptputs boolean values (true or false)

let x = 10;
let y = "10";

console.log("a == b:", x == y);
console.log("a === b:", x === y);
console.log("a != b:", x != y);
console.log("a !== b:", x !== y);
console.log("a > 5:", x > 5);
console.log("a < 5:", x < 5);
console.log("a >= 10:", x >= 10);
console.log("a <= 10:", x <= 10);

// 4. Logical Operators -> &&, ||, !

let p = true;
let q = false;

console.log("AND:", p && q);
console.log("OR:", p || q);
console.log("NOT:", !p);

// 5. Ternary Operator -> condition ? expr1 : expr2

let age1 = 20;
let canVote = (age1 >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log("Can vote:", canVote);

let m = 5;   // 0101
let n = 3;   // 0011

console.log("Bitwise AND:", m & n);
console.log("Bitwise OR:", m | n);
console.log("Bitwise XOR:", m ^ n);
console.log("Bitwise NOT:", ~m);
console.log("Left Shift:", m << 1);
console.log("Right Shift:", m >> 1);

// 6. Typeof Operator -> to know the data type of a variable or value

let name = "Azim";
let num2 = 100;
let arr = [1, 2, 3];

console.log(typeof name);
console.log(typeof num2);
console.log(arr instanceof Array);
console.log(name instanceof String); // false in JS