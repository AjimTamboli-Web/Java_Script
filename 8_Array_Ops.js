// CREATING ARRAYS
const arr1 = [1, 2, 3];
const arr2 = new Array(5);
const arr3 = Array.from('hello');

// ACCESSING ELEMENTS
const first = arr1[0];
const last = arr1[arr1.length - 1];

// ADDING ELEMENTS
arr1.push(4);           // Add to end
arr1.unshift(0);        // Add to start
arr1.splice(2, 0, 2.5); // Insert at index

// REMOVING ELEMENTS
arr1.pop();             // Remove from end
arr1.shift();           // Remove from start
arr1.splice(2, 1);      // Remove at index

// ITERATING
arr1.forEach((item, index) => console.log(item));
arr1.map(x => x * 2);
arr1.filter(x => x > 2);
arr1.find(x => x > 2);
arr1.findIndex(x => x > 2);

// SEARCHING
arr1.includes(3);
arr1.indexOf(3);
arr1.lastIndexOf(3);

// TRANSFORMING
arr1.reduce((sum, x) => sum + x, 0);
arr1.reverse();
arr1.sort((a, b) => a - b);
arr1.slice(1, 3);
arr1.concat([5, 6]);
arr1.join('-');

// CHECKING
Array.isArray(arr1);
arr1.every(x => x > 0);
arr1.some(x => x > 5);

// FLATTENING
const nested = [1, [2, 3, [4, 5]]];
nested.flat(2);
nested.flatMap(x => [x, x * 2]);

// SPREADING
const copy = [...arr1];
const merged = [...arr1, ...arr2];