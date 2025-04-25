export class Person {
  public firstName: string;
  public lastName: string;
  private age: number;
  protected location: string;

  constructor(firstName: string, lastName: string, age: number, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  
  public getAge(): number {
    return this.age;
  }

  public getLocation(): string {
    return this.location;
  }
}

class Employee extends Person {
  public role: string;

  constructor(firstName: string, lastName: string, age: number, location: string, role: string) {
    super(firstName, lastName, age, location);
    this.role = role;
  }

  public getRoleWithLocation(): string {
    return `${this.role} at ${this.location}`;
  }
}

const employee = new Employee("Jane", "Doe", 30, "New York", "Developer");
// console.log(employee);
// console.log(employee.getFullName());
// console.log(employee.getRoleWithLocation());

class MyClass {
  private _myProperty: number = 0;

  public get myProperty(): number {
    return this._myProperty;
  }
  
  public set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myClass = new MyClass();
console.log(myClass.myProperty);
myClass.myProperty = 10;
console.log(myClass.myProperty);
