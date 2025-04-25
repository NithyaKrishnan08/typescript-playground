// string
let message: string = "Hello, world!";
message = "Hello, TypeScript!";
// console.log(message);

// number
let count: number = 10;
// console.log(count);

// boolean
let isActive: boolean = true;
// console.log(isActive);

// Type inference
let inferredMessage = "Hello, TypeScript!";
// console.log(inferredMessage);
// console.log("Type of inferredMessage:", typeof inferredMessage);

//anyType
let anyValue: any = "Hello, TypeScript!";
// console.log(anyValue);
// console.log("Type of anyValue:", typeof anyValue);

anyValue = 10;
// console.log(anyValue);
// console.log("Type of anyValue:", typeof anyValue);

// tuple
let person1: [string, number] = ["John", 30];

// enum
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Red;

// Function parameters annotations
function greet8(name: string): string {
  return `Hello, ${name}!`;
}
// console.log(greet("John"));

function addOne(num: number): number {
  return num + 1;
}
// console.log(addOne(1));

// arrow functions
const add = (a: number, b: number): number => a + b;
// console.log(add(1, 2));

// Default parameters
function greet1(person1: string = "Guest"): string {
  return `Hello, ${person1}!`;
}

// console.log(greet1());
// console.log(greet1("John"));

// Void in TypeScript
function logMessage(message: string): void {
  console.log(message);
}
// logMessage("Hello, TypeScript!");

// Never type
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("This is an error");

// array [] notation
let numbers: number[] = [1, 2, 3];
// console.log(numbers);
// console.log(numbers[0]);

let strs: string[] = ["a", "b", "c"];
// console.log(strs);
// console.log(strs[0]);

// array <> notation - old syntax
let numbers2: Array<number> = [1, 2, 3];
// console.log(numbers2);
numbers2.push(4);
// console.log(numbers2);
numbers2.pop();
// console.log(numbers2);

// Multi-dimensional arrays
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];  

// console.log(matrix);
// console.log(matrix[0]);
// console.log(matrix[0][0]);

// Object types
let person2: { name: string; age: number } = {
  name: "John",
  age: 30
};

// console.log(person2);
// console.log(person2.name);
// console.log(person2.age);

// Factory function

let person3: { name: string; age: number } = {
  name: "John",
  age: 30
};

function printPerson(person: { name: string; age: number }) : { name: string; age: number }{ 
  console.log(person);
  return person;
}

// let person4 = printPerson(person3);
// console.log(person4);

// Type Aliases
type User = { name: string; age: number, location: string };

function printUserInfo(user: User) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
}

const myUser: User = {
  name: "Unicorn",
  age: 100,
  location: "New York"
};

// printUserInfo(myUser);

// Optional properties
type User2 = { name: string; age: number, location?: string };

function printUserInfo2(user: User2) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
}

const myUser2: User2 = {
  name: "Unicorn",
  age: 100,
};

// printUserInfo2(myUser2);

// Readonly properties
type User3 = { readonly name: string; age: number, location?: string };

const myUser3: User3 = {
  name: "Unicorn",
  age: 100,
};

// printUserInfo2(myUser3);

// Intersection types

type UserInfo = {
  firstName: string;
  lastName: string;
  age: number;
}

type AccountDetails = {
  email: string;
  password : string;
}

type UserAccount = UserInfo & AccountDetails;

const myUserAccount: UserAccount = {
  firstName: "Unicorn",
  lastName: "Magical",
  age: 100,
  email: "unicorn@unicorn.com",
  password: "unicorn123"
}

// console.log(myUserAccount);

// Union types

type UnionType = string | number;

const myUnion: UnionType = "Hello"; 
// console.log(myUnion);

const myUnion2: UnionType = 100;
// console.log(myUnion2);

// Literal types
type LiteralType = "Hello" | "World" | true | 2;

const myLiteral: LiteralType = "Hello";
// console.log(myLiteral);

const myLiteral2: LiteralType = "World";
// console.log(myLiteral2);

const myLiteral3: LiteralType = true;
// console.log(myLiteral3);

const myLiteral4: LiteralType = 2;
// console.log(myLiteral4);

// Tuples
type TupleType = [string, number];

const myTuple: TupleType = ["Hello", 100];
// console.log(myTuple);
// console.log(myTuple[0]);
// console.log(myTuple[1]);

// Destructuring
const [firstName, lastName] = myTuple;
// console.log(firstName);
// console.log(lastName);

// enums
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

const myDirection: Direction = Direction.Left;
console.log(myDirection);
console.log(Direction);

























