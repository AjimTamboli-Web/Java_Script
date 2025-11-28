// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// 3. do...while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// 4. for...of loop (iterates over values)
const arr = ['a', 'b', 'c'];
for (const value of arr) {
    console.log(value);
}

// 5. for...in loop (iterates over keys/indices)
const obj = { name: 'John', age: 30 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// 6. forEach() method
arr.forEach((value, index) => {
    console.log(index, value);
});

// 7. map() - transforms array
const doubled = arr.map(x => x * 2);

// 8. filter() - filters array
const filtered = [1, 2, 3, 4].filter(x => x > 2);