// enums example
enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Role {
    Admin,
    Editor,
    Guest,
}


let userRole: Role = Role.Admin; // using the enum to assign a role to a user

// literal types example -> often used instead of enums for more flexible and descriptive types
type Direction = 'North' | 'South' | 'East' | 'West'; // defining a type that can only be one of the specified string literals

// type aliases and custom types example
type User = {
    name: string;
    age: number;
    role: Role; // using the Role enum as a type for the role property
};

let user1: User = {
    name: 'Alice',
    age: 30,
    role: Role.Editor, // assigning a value from the Role enum
};