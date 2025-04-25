// Type narrowing with typeof operator
type MyType = string | number;

function exampleFunction(value: MyType) : void {
  if (typeof value === "string") 
  {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// exampleFunction("hello");
// exampleFunction(12);

// Type narrowing with instanceof operator
class Dog {
  bark() : void {
    console.log("Woof!");
  }
}

class Cat {
  meow() : void {
    console.log("Meow!");
  }
}

function animalSound(animal: Dog | Cat) : void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog = new Dog();
const myCat = new Cat();

// animalSound(myDog);
// animalSound(myCat);

// Intersection types

type Employee = {
  id: number,
  name: string
}

type Manager = {
  department: string,
  role: string
}

type ManagerWithEmployeeInfo = Employee & Manager;

const manager : ManagerWithEmployeeInfo = {
  id: 12345,
  name: "Unicorn Magic",
  department: "Engineering",
  role: "Team Lead"
}

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);