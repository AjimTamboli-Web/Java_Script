// Feature	   ⭕ var	      ⭕ let            ⭕ const
// Scope	    Function	     Block	            Block
// Reassign	    Yes	              Yes	             No
// Redeclare	Yes	              No	             No
// Hoisted	    Yes (Undefined)   Yes (TDZ)       	Yes (TDZ) (Temporal Dead Zone)



var age;
age = 23;
age = 32;
var age = 99;   // accept dupalication
console.log(age);

let old;
old= 75;
old = 23;
// let old = 89;   // cannot redeclare block-scoped variable.
console.log(old);


// const young;   // declaration must be initialize at that time
// const young = 90;
// young = 32;    cannot re-assigned
const young = 100; // cannot redeclare block-scoped variable
console.log(young);

