let hobbies: string[] = ['Sports', 'Cooking']; // type inference for an array of strings

let grades:number[] = [90, 85, 92]; // type annotation for an array of numbers

let usersIds: (number | string)[] = [1, '2', 3]; // array that can contain both numbers and strings

//create a new array using the generic Array type
let mixedArray: Array<number | string> = [1, 'two', 3, 'four']; // using generic Array type for mixed types

// tuples
let user: [number, string] = [1, 'John Doe']; // tuple with a number and a string -> similar to an array but with fixed types and length

// objects
let person: { name: string; age: number } = { name: 'Alice', age: 30 }; // object with specific properties and types

//defining a more complex object with nested properties and arrays 
let appUser: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        permissions: string[];
    }
} = {
    name: 'Bob',
    age: 'unknown',
    hobbies: ['Reading', 'Traveling'],
    role: {
        description: 'Admin',
        permissions: ['read', 'write', 'delete']
    }
};

// Must not be null or undefined
let nonNullableUser: {} = "Alice"; // using an empty object type to allow any non-null and non-undefined value
// nonNullableUser = null; // Error: Type 'null' is not assignable to type '{}'
// nonNullableUser = undefined; // Error: Type 'undefined' is not assignable to type '{}'


// Record type -> it tells TS that some values will be of a certain type, but we don't know the exact keys or values
let userRoles: Record<string, string> = {
    admin: 'Alice',
    editor: 'Bob',
    viewer: 'Charlie'
};