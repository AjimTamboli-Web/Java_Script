// HIGHER ORDER FUNCTIONS (HOF)
// A function that takes a function as argument or returns a function

// Example 1: Function that takes a function as argument
function mapArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

const numbers = [1, 2, 3, 4];
const doubled = mapArray(numbers, (num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Example 2: Function that returns a function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = createMultiplier(3);
console.log(triple(5)); // 15

// Example 3: Function composition
function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}

const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;
const addThenMultiply = compose(multiply2, add5);
console.log(addThenMultiply(3)); // (3 + 5) * 2 = 16

// HIGHER ORDER COMPONENTS (HOC) - React pattern
// A component that takes a component and returns an enhanced component

function withLogger(Component) {
    return function EnhancedComponent(props) {
        useEffect(() => {
            console.log('Component mounted:', Component.name);
            return () => console.log('Component unmounted:', Component.name);
        }, []);

        return <Component {...props} />;
    };
}

// Usage: const LoggedButton = withLogger(Button);