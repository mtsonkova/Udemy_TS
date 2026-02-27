//example of nullish coalescing operator in TypeScript

let value: string | null = null; // this variable can be a string or null

// using the nullish coalescing operator to provide a default value if 'value' is null or undefined
let result: string = value ?? "default value"; // if 'value' is null or undefined, 'result' will be "default value"

console.log(result); // output: "default value"