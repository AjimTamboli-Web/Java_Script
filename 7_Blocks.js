// /D:/JavaScript/7_Blocks.js
// Examples of common Array methods and useful operations

// Sample data
const nums = [3, 6, 1, 9, 2, 6, 3];
const people = [
    { name: "Alice", age: 28, department: "dev" },
    { name: "Bob", age: 35, department: "ops" },
    { name: "Charlie", age: 28, department: "dev" },
    { name: "Dana", age: 40, department: "hr" },
];

// Non-mutating traversal methods
console.log("forEach:");
nums.forEach((n, i) => console.log(i, n)); // side-effect only

console.log("\nmap (transform):");
const doubled = nums.map(n => n * 2);
console.log(doubled);

console.log("\nfilter (select):");
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

console.log("\nfind (first match) and findIndex:");
console.log(nums.find(n => n > 5));       // 6
console.log(nums.findIndex(n => n > 5));  // index

console.log("\nsome and every:");
console.log("some > 9?", nums.some(n => n > 9));
console.log("every > 0?", nums.every(n => n > 0));

console.log("\nincludes, indexOf, lastIndexOf:");
console.log("includes 6?", nums.includes(6));
console.log("first index of 3:", nums.indexOf(3));
console.log("last index of 3:", nums.lastIndexOf(3));

// Aggregation with reduce
console.log("\nreduce (sum, min, max, counts):");
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("sum:", sum);

const max = nums.reduce((a, b) => (a > b ? a : b), -Infinity);
const min = nums.reduce((a, b) => (a < b ? a : b), Infinity);
console.log("max:", max, "min:", min);

// frequency count
const counts = nums.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
}, {});
console.log("counts:", counts);

// Working with arrays of objects
console.log("\npluck (map property), groupBy, unique ages:");
const names = people.map(p => p.name);
console.log("names:", names);

const groupBy = (arr, keyFn) =>
    arr.reduce((acc, item) => {
        const key = keyFn(item);
        (acc[key] = acc[key] || []).push(item);
        return acc;
    }, {});

console.log("group by department:", groupBy(people, p => p.department));
console.log("unique ages:", [...new Set(people.map(p => p.age))]);

// Sorting (non-stable behavior depends on engine); sort mutates original
console.log("\nsort (numeric):");
const sortedAsc = [...nums].sort((a, b) => a - b); // clone then sort
console.log("asc:", sortedAsc);

console.log("\nreverse (mutates):");
const reversed = [...nums].slice().reverse();
console.log(reversed);

// Immutable additions/removals
console.log("\nadd/remove immutably:");
const appended = [...nums, 10];           // push immutably
const prepended = [0, ...nums];           // unshift immutably
const removedIndex2 = nums.filter((_, i) => i !== 2); // remove by index immutably
console.log("appended:", appended);
console.log("prepended:", prepended);
console.log("removed index 2:", removedIndex2);

// Mutating methods (use carefully)
console.log("\nmutating methods demo (copy first to keep original):");
const m = nums.slice(); // shallow copy
m.push(99);              // adds to end
m.pop();                 // removes last
m.shift();               // removes first
m.unshift(100);          // adds to front
m.splice(2, 1, 42);      // at index 2 remove 1 and insert 42
console.log("mutated:", m);

// Useful helpers
console.log("\nuseful helpers:");

const average = arr => (arr.length ? arr.reduce((s, x) => s + x, 0) / arr.length : 0);
console.log("average:", average(nums));

const unique = arr => [...new Set(arr)];
console.log("unique nums:", unique(nums));

const chunk = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
};
console.log("chunk(2):", chunk(nums, 2));

const flat = arr => arr.reduce((a, b) => a.concat(b), []);
console.log("flatten [[1,2],[3,4]]:", flat([[1, 2], [3, 4]]));

// Chaining examples
console.log("\nchaining example:");
const pipeline = nums
    .filter(n => n > 2)
    .map(n => n * 3)
    .sort((a, b) => a - b);
console.log(pipeline);

// Advanced: group by property and sum a field
console.log("\ngroup and sum ages by department:");
const sumAgesByDept = people
    .reduce((acc, p) => {
        acc[p.department] = (acc[p.department] || 0) + p.age;
        return acc;
    }, {});
console.log(sumAgesByDept);

// Convert array-like or iterable to array
console.log("\nArray.from and Array.of:");
console.log(Array.from("abc"));       // ['a','b','c']
console.log(Array.of(5));             // [5]

// entries, keys, values iterators
console.log("\nentries, keys, values:");
for (const [i, v] of nums.entries()) {
    /* iterate index and value */
}
console.log("done");

// Small utilities exported (if used as module)
module.exports = {
    doubled,
    evens,
    sum,
    max,
    min,
    counts,
    names,
    groupBy,
    average,
    unique,
    chunk,
};
