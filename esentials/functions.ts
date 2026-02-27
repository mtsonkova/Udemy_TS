// example of void function
function logMessage(message: string): void {
    console.log(message); // this function does not return anything, hence the return type is void
}

// example of a function that returns a value
function add(a: number, b: number): number {
    return a + b; // this function returns a number, so the return type is number
}

// example of a function with optional parameters
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`; // if a greeting is provided, use it
    }
    return `Hello, ${name}!`; // default greeting if none is provided
}

// example of a function with default parameters
function multiply(a: number, b: number = 1): number {
    return a * b; // if b is not provided, it defaults to 1
}

// example of a function with rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0); // sums all the numbers provided as arguments
}

// example of a function that uses a callback
function fetchData(callback: (data: string) => void): void {
    // Simulating an asynchronous data fetch
    setTimeout(() => {
        const data = 'Fetched data'; // this would be the result of the data fetch
        callback(data); // calling the callback function with the fetched data
    }, 1000);
}

// example of a function that returns a promise
function fetchDataPromise(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Fetched data with promise'; // this would be the result of the data fetch
            resolve(data); // resolving the promise with the fetched data
        }, 1000);
    });
}       

// example of function that uses never type to indicate that it never returns a value (e.g., it always throws an error)
function throwError(message: string): never {
    throw new Error(message); // this function always throws an error, so it never returns a value
}

// use function type as a type for a variable
type Operation = (a: number, b: number) => number; // defining a type for a function that takes two numbers and returns a number

let addOperation: Operation = add; // assigning the add function to a variable of type Operation
let multiplyOperation: Operation = multiply; // assigning the multiply function to a variable of type Operation

// example of a higher-order function that takes another function as an argument
function performOperation(a: number, b: number, operation: Operation): number {
    return operation(a, b); // calling the provided operation function with the given numbers
}

// use function type inside of an object type
type Calculator = {
    add: Operation; // using the Operation type for the add method
    multiply: Operation; // using the Operation type for the multiply method
};

const calculator: Calculator = {
    add: (a, b) => a + b, // implementing the add method
    multiply: (a, b) => a * b, // implementing the multiply method
};

// example of a function that uses generics
function identity<T>(arg: T): T {
    return arg; // this function simply returns the argument it receives, and the type of the argument is determined by the caller
}