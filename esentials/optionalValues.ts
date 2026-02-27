// example of optional values in TypeScript

// defining a type for a user with optional properties
type User = {
    name: string; // required property
    age?: number; // optional property, denoted by the '?' symbol
    email?: string; // another optional property
};

// creating a user object with only the required property
let user1: User = {
    name: 'Alice',
};

// creating a user object with all properties
let user2: User = {
    name: 'Bob',
    age: 25,
    email: 'bob@example.com',
};  
