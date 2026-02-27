// example of instanceof type guards

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else if (animal instanceof Cat) {
    animal.meow();
  } else {
    throw new Error("Unknown animal");
  }
}

const myDog = new Dog();
const myCat = new Cat();

makeSound(myDog); // Output: Woof!
makeSound(myCat); // Output: Meow!