// MUTATING METHODS (modify original array)

const arr = [1, 2, 3, 4, 5];

// push() - add element to end
arr.push(6); // [1, 2, 3, 4, 5, 6]

// pop() - remove last element
arr.pop(); // [1, 2, 3, 4, 5]

// unshift() - add element to start
arr.unshift(0); // [0, 1, 2, 3, 4, 5]

// shift() - remove first element
arr.shift(); // [1, 2, 3, 4, 5]

// splice() - add/remove elements
arr.splice(2, 1, 'a', 'b'); // removes 1 element at index 2, adds 'a', 'b'

// reverse() - reverse array
arr.reverse();

// sort() - sort elements
arr.sort((a, b) => a - b);

// NON-MUTATING METHODS (return new array/value)

// map() - transform elements
arr.map(x => x * 2);

// filter() - filter elements
arr.filter(x => x > 2);

// reduce() - reduce to single value
arr.reduce((sum, x) => sum + x, 0);

// forEach() - iterate
arr.forEach((x, i) => console.log(x, i));

// find() - find first match
arr.find(x => x > 3);

// findIndex() - find index of first match
arr.findIndex(x => x > 3);

// includes() - check if exists
arr.includes(3);

// indexOf() - find index
arr.indexOf(3);

// slice() - copy portion
arr.slice(1, 3);

// concat() - join arrays
arr.concat([6, 7]);

// join() - convert to string
arr.join(', ');