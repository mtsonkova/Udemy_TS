// example of index types

interface Person {
  name: string;
  age: number;
  location: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "location"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "Alice",
  age: 30,
  location: "New York",
};

const name = getProperty(person, "name"); // type of name is string
const age = getProperty(person, "age"); // type of age is number
const location = getProperty(person, "location"); // type of location is string 