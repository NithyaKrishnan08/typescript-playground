// function printNumber(item: number, defaultValue: number) : [number, number] {
//   return [item, defaultValue];
// }

// function printString(string1: string, string2: string) : [string, string] {
//   return [string1, string2];
// }

// function printBoolean(bool1: boolean, bool2: boolean) : [boolean, boolean] {
//   return [bool1, bool2];
// }

// const nums = printNumber(12, 14);
// const strings = printString("Unicorn", "Magical");
// const bools = printBoolean(true, false);
// console.log(nums);
// console.log(strings);
// console.log(bools);

function uniqueDataTypesFunc<T>(item: T, defaultValue: T) : [T, T] {
  return [item, defaultValue];
}

const nums = uniqueDataTypesFunc<number>(12, 13);
const strings = uniqueDataTypesFunc<string>('Unicorn', 'Magic');
const bools = uniqueDataTypesFunc<boolean>(true, false);
// console.log(nums);
// console.log(strings);
// console.log(bools);

interface Dog1 {
  name: string;
  breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog1>({name: "Nova", breed: "Golden Retriever"}, {name: "Tommy", breed: "Labrador"});
// console.log(dog1);

function getRandomKeyValuePair<T>(obj: {[key: string] : T}): {key: string; value: T;} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)]
  return {key: randKey, value: obj[randKey]};
}

const strObject = {a: 'apple', b: 'banana', c: 'cherry'};
const result1 = getRandomKeyValuePair<string>(strObject);
// console.log(result1);

const numberObject = {one: 1, two: 2, three: 3};
const result2 = getRandomKeyValuePair<number>(numberObject);
// console.log(result2);

const boolObject = {True: true, False: false};
const result3 = getRandomKeyValuePair<boolean>(boolObject);
// console.log(result3);

function filterArray<T>(array: T[], condition: (item: T) => boolean) : T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
// console.log(evenNumbers);

const stringArray = ["apple", "banana", "cherry", "date"];
const shortWords = filterArray<string>(stringArray, (fruit) => fruit.length < 6);
// console.log(shortWords);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  {
    name: 'apple',
    color: 'red'
  },
  {
    name: 'banana',
    color: 'yellow'
  },
  {
    name: 'grape',
    color: 'purple'
  },
  {
    name: 'kiwi',
    color: 'green'
  },
  {
    name: 'cherry',
    color: 'red'
  }
]

const filterFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "red");
// console.log(filterFruits);

function reversePair<T, U>(value1: T, value2: U) : [U, T] {
  return [value2, value1];
}

const reversedPair1 = reversePair('hello', 1);
// console.log(reversedPair1);

const reversedPair2 = reversePair(true, 'hello');
// console.log(reversedPair2);

function reverse3Numbers<T, U, W>(value1: T, value2: U, value3: W) : [W, U, T] {
  return [value3, value2, value1];
}

const reversed3Numbers = reverse3Numbers(true, 'hello', 1);
// console.log(reversed3Numbers);

// Generics in class
class Box<T> {
  private content : T;

  constructor(initialContent : T) {
    this.content = initialContent;
  }

  getContent() : T {
    return this.content;
  }

  setContent(newContent: T) : void {
    this.content = newContent;
  }
}

const stringBox = new Box<string>("Hello, Typescript");
console.log(stringBox.getContent());
stringBox.setContent("I am learning Typescript");
console.log(stringBox.getContent());

const numberBox = new Box<number>(100);
console.log(numberBox.getContent());
numberBox.setContent(200);
console.log(numberBox.getContent());
