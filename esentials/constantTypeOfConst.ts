// example of  constant type of const

const PI = 3.14; // type of PI is number
const GREETING = "Hello, world!"; // type of GREETING is string
const IS_ACTIVE = true; // type of IS_ACTIVE is boolean

// Using const assertions to create literal types
const COLOR = "red" as const; // type of COLOR is "red"
const SIZE = 42 as const; // type of SIZE is 42
const STATUS = "active" as const; // type of STATUS is "active"

console.log(PI); // Output: 3.14
console.log(GREETING); // Output: "Hello, world!"
console.log(IS_ACTIVE); // Output: true
console.log(COLOR); // Output: "red"
console.log(SIZE); // Output: 42
console.log(STATUS); // Output: "active"