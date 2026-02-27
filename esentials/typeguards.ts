// typeguarrds example

type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  role: string;
};

function isUser(obj: any): obj is User {
  return 'age' in obj && typeof obj.age === 'number';
}

function isAdmin(obj: any): obj is Admin {
  return 'role' in obj && typeof obj.role === 'string';
}

function printInfo(obj: User | Admin) {
  if (isUser(obj)) {
    console.log(`User Name: ${obj.name}, Age: ${obj.age}`);
  } else if (isAdmin(obj)) {
    console.log(`Admin Name: ${obj.name}, Role: ${obj.role}`);
  } else {
    console.log('Unknown type');
  }
}

const user: User = { name: 'Alice', age: 30 };
const admin: Admin = { name: 'Bob', role: 'Manager' };

printInfo(user); // User Name: Alice, Age: 30
printInfo(admin); // Admin Name: Bob, Role: Manager