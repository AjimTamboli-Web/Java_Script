// /D:/JavaScript/4_Block_Scopes.js
// Demonstrations of var, let, and const block-scope behavior in JavaScript.

// 1) Hoisting differences
console.log('--- Hoisting ---');
try {
    console.log('before let x:', xLet); // ReferenceError (Temporal Dead Zone)
} catch (e) {
    console.log('before let x: Error ->', e.name);
}
try {
    console.log('before const y:', yConst); // ReferenceError (TDZ)
} catch (e) {
    console.log('before const y: Error ->', e.name);
}
console.log('before var z:', zVar); // undefined (var is hoisted and initialized to undefined)

let xLet = 'I am let';
const yConst = 'I am const';
var zVar = 'I am var';
console.log('after declarations:', xLet, yConst, zVar, '\n');

// 2) Block scope vs function scope
console.log('--- Block vs Function Scope ---');
if (true) {
    var v = 'var in block';
    let l = 'let in block';
    const c = 'const in block';
}
// var escapes the block (function/global scope); let/const do not.
console.log('v (accessible):', v);
try {
    console.log('l (should be inaccessible):', l);
} catch (e) {
    console.log('l (inaccessible):', e.name);
}
try {
    console.log('c (should be inaccessible):', c);
} catch (e) {
    console.log('c (inaccessible):', e.name);
}
console.log(); // blank line

// 3) Redeclaration and reassignment
console.log('--- Redeclaration & Reassignment ---');
// var can be redeclared
var redeclareVar = 1;
var redeclareVar = 2;
console.log('var redeclared:', redeclareVar);

// let and const cannot be redeclared in same scope (uncommenting below would throw)
// let redeclareLet = 1;
// let redeclareLet = 2; // SyntaxError

// reassignment
let mutableLet = 'first';
mutableLet = 'second'; // OK
console.log('let reassigned:', mutableLet);

const immutableConst = { name: 'Alice' };
// immutableConst = {}; // TypeError: Assignment to constant variable.
immutableConst.name = 'Bob'; // allowed: object properties are mutable
console.log('const object mutated:', immutableConst, '\n');

// 4) Temporal Dead Zone (TDZ)
console.log('--- Temporal Dead Zone (TDZ) ---');
(function () {
    // accessing before declaration triggers ReferenceError for let/const
    try {
        console.log('tdzTest:', tdzTest);
    } catch (e) {
        console.log('tdzTest access before declaration ->', e.name);
    }
    let tdzTest = 'now declared';
    console.log('tdzTest after declaration ->', tdzTest);
})();
console.log();

// 5) Loop closures: var vs let
console.log('--- Loop closures (var vs let) ---');
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log('var loop i ->', i), 10);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log('let loop j ->', j), 20);
}
// Expected: var loop prints "3" three times; let loop prints 0,1,2
// Wait a bit to let timeouts fire (only needed when running as script)
setTimeout(() => console.log('\nDone.'), 100);