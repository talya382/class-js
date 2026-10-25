// function Phone(name, model) {
//   this.name = name;
//   this.model = model;
//   this.details = function () {
//     console.log(`Phone:${name}, ${model}`);
//   };
// }
// const p = new Phone("Sumsong", "S22");
// p.details();

// function Rectangle(width, hight) {
//   this.width = width;
//   this.hight = hight;
//   this.area = function () {
//     console.log(`area:`, this.width * this.hight);
//   };
// }
// const R = new Rectangle(5, 4);
// R.area();

// //3

// function BankAccount(owner, balance) {
//   this.owner = owner;
//   this.balance = balance;
//   this.deposit = function (amount) {
//     console.log(this.balance + amount);
//   };

//   this.withdraw = function (amount) {
//     this.balance-=amount

//   };

//    this.checkBalance = function () {
//     console.log(this.balance);
//   };
// }
// const B = new BankAccount("t", 40000);
// B.deposit(5);
// B.withdraw(60);
// B.checkBalance();

//4
function Animal(name) {
  this.name = name;

  Animal.prototype.speak = function () {
    console.log(this.name, ":makes a sound");
  };
}
function Dog(name) {
  this.name = name;
  Object.setPrototypeOf(Dog.prototype, Animal.prototype);
  Dog.prototype.brak = function () {
    console.log(this.name, "bark");
  };
  Dog.prototype.speak = function () {
    console.log(this.name, `:wpp`);
  };
}
const D = new Dog("lacky");
D.speak();
D.brak();

//5
function Vehicle(type) {
  this.type = type;

  Vehicle.prototype.describe = function () {
    console.log("This is a car", this.type);
  };
}
function Car(brand) {
  this.brand = brand;
  //   this.type = type;
  Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
  Car.prototype.info = function () {
    console.log("This is a", this.brand);
  };
  Car.prototype.describe = function () {
    console.log("This is a car");
  };
}
const V = new Vehicle("kkk");
const C = new Car("lacky");
C.describe();
C.info();

//6
function Shape() {
  Shape.prototype.area = function () {
    return 0;
  };
}
function Circle(radius) {
  this.radius = radius;
  Object.setPrototypeOf(Circle.prototype, Shape.prototype);
  Circle.prototype.area = function () {
    console.log(Math.PI * this.radius ** 2);
  };
}
function Square(side) {
  this.side = side;
  Object.setPrototypeOf(Square.prototype, Shape.prototype);
  Square.prototype.area = function () {
    console.log(this.side ** 2);
  };
}
const Circle1 = new Circle(5);
Circle1.area();

const Square3 = new Square(5);
Square3.area();

//7
class Book {
  constructor(Title, author) {
    this.Title = Title;
    this.author = author;
  }
  info() {
    console.log(this.Title, "by", this.author);
  }
}
const B = new Book("the story", "yoni");
B.info();

//8
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("hello,i'm", this.name);
  }
}

class Student extends Person {
  constructor(name, school) {
    super(name);
    this.school = school;
  }
  study() {
    console.log(this.name, "is studying at", this.school);
  }
}
const P = new Person("talya");
P.greet();

const S = new Student("talya", "mayan");
S.study();

//9
class Employee {
  #salary;
  constructor(salary) {
    this.#salary = salary;
  }
  getSalary() {
    console.log(this.#salary);
  }
  work() {
    console.log("Employee is working");
  }
}
class Manager extends Employee {
//   #salary;
//   constructor(salary) {
//     super(this.#salary);
//   }
//   getSalary() {
//     console.log(this.#salary);
//   }
  work() {
    console.log("work is working");
  }
}

const M=new Manager(9000)
M.getSalary();
M.work();

const E=new Employee(3000)
E.getSalary();
E.work();