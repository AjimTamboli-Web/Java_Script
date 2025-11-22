// /D:/JavaScript/3_Conditional_Statements.js
// Examples of conditional statements and related patterns in JavaScript.

// 1) if statement
const num = -3;
if (num > 0) {
    console.log('Positive');
}
if (num === 0) {
    console.log('Zero');
}
if (num < 0) {
    console.log('Negative');
}

// 2) if...else
const isEven = (n) => {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log('Is 4 even?', isEven(4)); // true
console.log('Is 5 even?', isEven(5)); // false

// 3) if...else if...else (multiple branches)
function gradeLetter(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log('Grade for 83:', gradeLetter(83)); // B

// 4) Ternary operator (short conditional)
const age = 17;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log('Can vote?', canVote);

// 5) switch statement (good for discrete values)
function dayName(n) {
    switch (n) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Invalid day';
    }
}
console.log('Day 3 is', dayName(3));

// 6) Nested conditions (avoid deep nesting when possible)
function passwordStrength(pw) {
    if (!pw) return 'No password';
    if (pw.length < 6) {
        return 'Weak';
    } else {
        if (/[A-Z]/.test(pw) && /\d/.test(pw) && /[^A-Za-z0-9]/.test(pw)) {
            return 'Strong';
        } else {
            return 'Moderate';
        }
    }
}
console.log('pw "Ab1!" ->', passwordStrength('Ab1!'));

// 7) Guard clause (early return improves readability)
function processUser(user) {
    if (!user) return 'No user provided';
    if (!user.isActive) return 'Inactive user';
    // main logic
    return `Processing ${user.name}`;
}
console.log(processUser(null));
console.log(processUser({ name: 'Sam', isActive: false }));
console.log(processUser({ name: 'Ada', isActive: true }));

// 8) Truthy / Falsy examples and short-circuiting
const first = 0 || 'default'; // 'default' because 0 is falsy
const second = '' ?? 'fallback'; // '' is not null/undefined, so '' remains (nullish coalescing)
console.log('0 || default ->', first);
console.log("'' ?? fallback ->", second);

// Short-circuit execution for defaults
function greet(name) {
    // if name is falsy (except null/undefined) this will still coerce; prefer ?? if you only want null/undefined
    const safe = name || 'Guest';
    console.log(`Hello, ${safe}!`);
}
greet('');
greet('Ravi');

// 9) Optional chaining to safely access nested properties
const data = { user: { profile: { email: 'x@y.com' } } };
console.log('Email:', data.user?.profile?.email ?? 'no-email');

// 10) Best practices summary (demonstrated above):
// - Prefer guard clauses to reduce nesting.
// - Use ternary for simple inline branches; avoid for complex logic.
// - Use switch for discrete known values.
// - Use || and ?? appropriately: || treats many values as falsy, ?? only treats null/undefined.
// - Optional chaining prevents runtime errors when accessing deep properties.