// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

let z = 5;
console.log("Increment:", ++z);
console.log("Decrement:", --z);

// 2. Assignment Operators

let num = 10;

num += 5;   // num = 15
num -= 3;   // num = 12
num *= 2;   // num = 24
num /= 4;   // num = 6
num %= 4;   // num = 2

console.log("Final value:", num);

// 3. Comparison Operators

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

// 4. Logical Operators

let p = true;
let q = false;

console.log("AND:", p && q);
console.log("OR:", p || q);
console.log("NOT:", !p);

// 5. Ternary Operator

let m = 5;   // 0101
let n = 3;   // 0011

console.log("Bitwise AND:", m & n);
console.log("Bitwise OR:", m | n);
console.log("Bitwise XOR:", m ^ n);
console.log("Bitwise NOT:", ~m);
console.log("Left Shift:", m << 1);
console.log("Right Shift:", m >> 1);

// 6. Typeof Operator

let name = "Azim";
let num2 = 100;
let arr = [1, 2, 3];

console.log(typeof name);
console.log(typeof num2);
console.log(arr instanceof Array);
console.log(name instanceof String); // false in JS