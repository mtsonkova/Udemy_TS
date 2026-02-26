let userName: string = "John Doe"; // type annotation or type assignment for a string variable
let age: number = 30; // type inference for a number variable (guess the type based on the assigned value)
let isAdmin: boolean = true;

console.log(`User Name: ${userName}`);
console.log(`Age: ${age}`);
console.log(`Is Admin: ${isAdmin}`);

function add(a: number, b: number): number {
    return a + b;
}

let sum = add(5, 10);
console.log(`Sum: ${sum}`);

function subtract(a: number, b: number = 5): number {
    return a - b;
}   

let difference = subtract(10);
console.log(`Difference: ${difference}`);

// union type example
let userId : number | string = 25; // can be either a number or a string
userId = "25";