// Interface

interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const computerExample: Computer = {
  name: "MacBook Pro",
  ram: 16,
  hdd: 100,
};

// console.log(computerExample);

// Interface with functions

interface MathOperations {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

const mathOperations: MathOperations = {
  add(a: number, b: number): number {
    return a + b;
  },
  subtract(a: number, b: number): number {
    return a - b;
  },
  multiply(a: number, b: number): number {
    return a * b;
  },
  divide(a: number, b: number): number {
    return a / b;
  }
};

// console.log(mathOperations.add(1, 2));
// console.log(mathOperations.subtract(1, 2));
// console.log(mathOperations.multiply(1, 2));
// console.log(mathOperations.divide(1, 2));

interface SimpleMath {
  (a: number, b: number): number;
}

const addNumbers: SimpleMath = (a: number, b: number): number => {
  return a + b;
};

// console.log(addNumbers(1, 2));

interface Person {
  name: string;
  age: number;
  email: string;
  sayHello(): void;
}

function greet(person: Person): void {
  console.log(`Hello, ${person.name}!`);
  person.sayHello();
}

const john: Person = {
  name: "John",
  age: 30,
  email: "john@example.com",
  sayHello: () => {
    console.log("Hello, there!");
  }
};

// greet(john);

interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie1 : MovieGenre = {
  name: 'Star Movies',
  ratings: 8.9,
  genre: 'Action',
  printMovieInfo(name: string, price: number, ratings: number) : string | number {
    return `Movie name: ${name}  Price: ${price} Ratings: ${ratings}`;
  }
};

const res = movie1.printMovieInfo("John Wick", 100, 8);
// console.log(res);

// interface Vehicle {
//   start(): void;
//   stop(): void;
// }

// class Car implements Vehicle {
//   start(): void {
//     console.log("Car is starting....")
//   }

//   stop(): void {
//     console.log("Car is stopped.")
//   }
// }

// const myCar = new Car();
// myCar.start();
// myCar.stop();

// Declaration merging (Interface extension)

// Original Interface
interface Car {
  brand: string;
  start(): void;
}

// Declaration merging
interface Car {
  model: string;
  stop(): void;
}

const myCar : Car = {
  brand: "BMW",
  model: "Xoom13",
  start() {
    console.log('Start');
  },
  stop() {
    console.log('Stop')
  }
}

myCar.start();
myCar.stop();