// Creating strings
const str1 = "Hello";
const str2 = 'World';
const str3 = `Template literal with ${str1}`;

// String properties and methods
const text = "JavaScript";

console.log(text.length);              // 10
console.log(text.charAt(0));           // 'J'
console.log(text.indexOf('S'));        // 4
console.log(text.toUpperCase());       // 'JAVASCRIPT'
console.log(text.toLowerCase());       // 'javascript'
console.log(text.slice(0, 4));         // 'Java'
console.log(text.substring(0, 4));     // 'Java'
console.log(text.replace('Java', 'Type')); // 'TypeScript'
console.log(text.split(''));           // ['J','a','v','a','S','c','r','i','p','t']
console.log(text.trim());              // removes whitespace
console.log(text.includes('Script'));  // true
console.log(text.startsWith('Java'));  // true
console.log(text.endsWith('Script'));  // true

// String concatenation
const greeting = "Hello " + "World";
const greeting2 = `Hello ${str1}`;

// Escape characters
const escaped = "Line 1\nLine 2\tTabbed";