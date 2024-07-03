// console.log(window);
// console.log(this); //because the "this" reserved key word is not in any container in this instance it will be reffering to the window
// console.log(this === window); // true

// window.firstName = "Paul"
// this.lastName = "WebDev"
// console.log(window); //if you search in the windows console you will see the variable firstName that was created'

//******************** */
// function printThis() {
//     return this
// }

// const res = printThis()
// console.log(res);

//******************** */


// const obj = {
//     firstName : "Paul",
//     LastName : "WebDev",
//     fullName: function () {
//         return `${this.firstName} ${this.LastName}`
//     },
// }

// const res = obj.fullName()
// console.log(res);
//******************** */

const obj = {
    firstName : "Paul",
    LastName : "WebDev",
    fullName: () => { //using arrow function will give you undefined
        // return `${this.firstName} ${this.LastName}`
        return this //and using the arrow with this keyword will be refering to the window object
    },
}

const res = obj.fullName()
console.log(res);

const personObj = {
    name : "PaulofPh",
    age: "19",
    greetRegular: function() { 
        return `Hello, my name is ${this.name} & i'm ${this.age} years old`
    },

    greetArrow: () => { 
        return `Hello, my name is ${this.name} & i'm ${this.age} years old`
    },
}

const res1 = personObj.greetRegular()
const res2 = personObj.greetArrow()
console.log(res1);
console.log(res2);


/******************************** */

// A factory function is a type of function that is used to create and return objects, it's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword

// ------------------------------------------
// let huxn = {
//   firstName: "HuXn",
//   lastName: "WebDev",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// let john = {
//   firstName: "John",
//   lastName: "doe",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// john.fullName();

// ------------------------------------------
// function createPerson(firstName, lastName, pl) {
//   return {
//     firstName: "john",
//     lastName: "doe",
//     fullName: function () {
//       console.log(
//         `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
//       );
//     },
//   };
// }

// const john = createPerson("John", "Doe", "Python");
// const huxn = createPerson("HuXn", "WebDev", "Golang");
// const jordan = createPerson("jordan", "peterson", "JavaScript");
// console.log(john);
// console.log(huxn);
// console.log(jordan);

// console.log(john.fullName());
// console.log(huxn.fullName());
// console.log(jordan.fullName());
// ------------------------------------------

// ------------------------------------------
function createPerson(firstName, lastName, pl) {
    return {
      firstName: firstName,
      lastName: lastName,
      pl: pl,
      fullName: function () {
        console.log(
          `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
        );
      },
    };
  }
  
  const john = createPerson("John", "Doe", "Python");
  const huxn = createPerson("HuXn", "WebDev", "Golang");
  const jordan = createPerson("jordan", "peterson", "JavaScript");
  console.log(john);
  console.log(huxn);
  console.log(jordan);
  
  console.log(john.fullName());
  console.log(huxn.fullName());
  console.log(jordan.fullName());
  // ------------------------------------------

function createVehicle(type, brand, model, year) {
  return{type, brand, model, year}
}
  const vehicle1 = createVehicle("Car", "Toyota", "Camry", 2005);
  const vehicle2 = createVehicle("Motorcycle", "Toyota", "Suzuki", 2009);
  console.log(vehicle1);
  console.log(vehicle2);


  // ------------------------------------------

  // Constructor Function
  // Constructor functions in javascript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. they act as blueprints for creatinf multiple instances of objects with the same structure and behavior.
  
  function CreatePeople(firstName, lastName, pl) {
    this.firstName = firstName
    this.lastName = lastName
    this.pl = pl
    this.info = function () {
      console.log(
        `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl} programmong language`
      );
    }
  }

  // NEW KEYWORD:
  // 1. First create emoty object{}
  // 2. Sets "this" to point to that object
  // 3. We can omit the return statement using "new" keyword

  const john1 = new CreatePeople("John", "Doe", "JAVA")
  const Paul  = new CreatePeople("Paul", "Webdev", "JAVAscript")
  console.log(john1);
  john1.info();
  console.log(Paul);
  Paul.info();

  function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year

    this.getInfo =  function () {
      return`${this.title} by ${this.author} in ${this.year}`
    }
  }

  const book1 = new Book("The sudtle art of not giving a F*ck", "Mark", "2024")
  const book2 = new Book("Atomic Hobits", "James Clear", "2022")
  console.log(book1);
  const bookres1 = book1.getInfo();
  console.log(bookres1);
  console.log(book2);
  const bookres2 = book2.getInfo();
  console.log(bookres2);


  function PersonConstructor(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender

    this.methodInfo =  function () {
      return`My name is ${this.name} and i'm ${this.age} years old and i'm a ${this.gender}`
    }
  }

  const PaulofPh = new PersonConstructor("Paulofph", 19, "male")
  const HuXn = new PersonConstructor("HuxnWebdev", 20, "male")
  console.log(PaulofPh);
  console.log(PaulofPh.name);
  console.log(PaulofPh.age);
  console.log(PaulofPh.gender);
  const PaulofPhres1 = PaulofPh.methodInfo();
  console.log(PaulofPhres1);
  console.log(HuXn);
  console.log(HuXn.name);
  console.log(HuXn.age);
  console.log(HuXn.gender);
  const HuXnres2 = HuXn.methodInfo();
  console.log(HuXnres2);

  function Car(make, model, year, color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color

    this.start = function () {
      return`Starting the ${this.make} ${this.model}..`
    }

    this.stop =  function () {
      return`Stopping the ${this.make} ${this.model}..`
    }
  }

  const car1 = new Car("Toyota", "Camry", 2009, "Blue")
  const car2 = new Car("Honda", "CR-V", 2009, "Blue")

  const carRes = car1.start()
  console.log(carRes);
  const carRes1 = car2.stop()
  console.log(carRes1);

// ------------------------------------------

// Built-in constructors, also known as native constructors, are standard constructors provided by Javascript that allow you to create objects of various data types. these constructors are available globally and do not need to be ecplicitly defined. They provide a convenient way to create instances of primitive data types and built in objects.

// How to create numbers using built in constructors 
const num1 = new Number(10)
console.log(num1);
console.log(typeof num1);

// How to create strings using built in constructors 
const st1 = new String("Paulofph")
console.log(st1);

// How to create booleans using built in constructors 
const bool1 = new Boolean(false)
console.log(bool1);

// How to create arrays using built in constructors 
const arr1 = new Array(1, 2, 3)
console.log(arr1);

// ------------------------------------------

// The Object.create() method creates a new Object, using an existin object as the prototype of the newly created object

let person = {
  greet:function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  }
}

const PaulofPh1 = Object.create(person)
PaulofPh1.firstName = "Paulofph"
PaulofPh1.lastName = "Webdev"
PaulofPh1.greet()

let john2 = Object.create(person, {
  firstName: {value: "John"},
  lastName: {value: "Doe"}
})

john2.greet()

// ------------------------------------------

// Every javascript object has an anonymous property called a prototype
// Remember function & arrays are also an object
// that prototype will be parent of that object, prototype property is object by itself, which have some special properties & methods

// Every object is associated with another object
// The object (obj) is associated with[[Prototype]] Object
// -> which means obj object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways;
//  -> obj._proto_
//  -> obj.constructor.prototype
//  -> Object.getPrototypeOf(a)


const obj1 = {}
console.log(obj1);
console.log(obj1._proto_); //displaying undefined
console.log(obj1.constructor.prototype);
console.log(Object.getPrototypeOf(obj1));

const arr = new Array()
console.log(arr);

function Person(firstName, lastName, pl) {
  this.firstName = firstName
  this.lastName = lastName
  this.pl = pl
  this.info = function () {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl} programmong language`
    );
  }
}

const john12 = new Person("John", "Doe", "JAVA")
console.log(john12);
console.log(john12.constructor.prototype);

// ------------------------------------------
// ******* Changine the built-in method
Array.prototype.pop = function () {
  return "POP IT UP BABY"
}

const myArr = ["one", "two", "three"]
console.log(myArr.pop());

// ------------------------------------------
String.prototype.hello = function () {
  console.log(this);
  console.log(this.toUpperCase());
}

console.log('hello and welcome'.hello());

// ------------------------------------------
// Prottypal inheritance is a mechanism in Javascript that allows objects to inherit properties and methods from other objects. it is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internet property called [[Prototype]] (often referred to as _proto_), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the protype chain, which is usually the Object.prototype

function Animal(name) {
  this.name = name
}

Animal.prototype.sound = function () {
  return"Animal Sound"
}

const animal1 = new Animal("frog")
console.log(animal1.sound());

function Dog(name, breed) {
  Animal.call(this, name)
  this.breed = breed
}

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.bark = function () {
  return"woof"
}
const dog1 = new Dog("Buddy", "Genius")
console.log(dog1);
console.log(dog1.name);
console.log(dog1.sound());
console.log(dog1.bark());

// ------------------------------------------
// Classes are one of the features introduced in the ES6 version of JavasScript.
// A class os a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch(prottype) of a house it contains all the details about the floors, doors, windows, etc. Based on the descriptions, you build the house.

// Since many houses can be made from the same description, we can create many Objects from a class.

// Class Declaration
class Person1 {
  constructor(firstName, lastName, age){
    // Instance Members
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.printUserinfo = function () {
      return`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`
    }
  }
  // Prototype Members
  greet() { 
    return `hello there ${this.firstName} ${this.lastName}`;
  }

}

class Programmer extends Person1 {
  constructor(firstName,lastName, age, pl, experience){
    super(firstName,lastName, age) //this just calls the parent constructor
    this.pl = pl
    this.experience = experience
  }
}

const Paul1 = new Programmer("Paul", "Webdev", 19, "JS", 2)
console.log(Paul1.greet());

const john3 = new Person1("Huxn", "Webdev", 19)
console.log(john3.greet());


class Hero {
  constructor(name, level,){
    // Instance Members
    this.name = name
    this.level = level
  }
  // Prototype Members
  greet() { 
    return ` ${this.name} ${this.level} greets`;
  }

}

const john4 = new Hero("Huxn", 500)
console.log(john4);
console.log(john4.greet());

class Mega extends Hero {
  constructor(name,level, spell){
    super(name,level) //this just calls the parent constructor
    this.spell = spell
 }
}

const Paul2 = new Mega("Paul", 2, "Chant",)
console.log(Paul2);
console.log(Paul2.greet());

// ------------------------------------------
// Modifiers
// private -> this will mkae your method totally private
// private -> this will mkae your method totally private
// protected -> this will mkae your method only accesible inside the class and not outside

function MyClass(publicField, privateField, protectedField) {
  // Public Field
  this.publicField = publicField

  // Private Field(closure)
  const _privateField = privateField

  // Protected Field
  const _protectedField = protectedField

  // Public Method
  this.publicMethod = function () {
    return`Public Field: ${this.publicField}`
  }

  // Private Method(closure)
  function _privateMethod() {
    return`Private Method: ${_privateField}`
  }

  // Protected Method (closure)
  function _protectedMethod() {
    return`Protected Method: ${_protectedField}`
  }

  // Method to access protected method
//   this.accessProtectedMethod = function () {
//     return _protectedMethod
//   }
// }

this.accessProtectedMethod = function () {
  return _protectedMethod
}
}

const myObject = new MyClass("Public Data", "Private Data", "Protected Data")
// console.log(myObject.publicField);
// console.log(myObject._privateField);
// console.log(myObject._protectedField);

console.log(myObject.publicMethod());
// console.log(myObject._privateMethod()); //error message: _privateMethod is not a function
// console.log(myObject._protectedMethod());//error message: _protectedMethod is not a function
console.log(myObject.accessProtectedMethod());

// ------------------------------------------
// Basic 4 pilars of OOP
// Encapsulation
// Abstraction
// Inheritance
// Polymorphism

// ------------------------------------------
// Encapsulation: In JavaScript, we can achieve encapsulation by using closures to create private members.
function Counter() {
  let _count = 0 //Private Variable

  // Public method that can access and modify the private variable

  this.increment = function () {
    _count ++
  }

  this.decrement = function () {
    _count --
  }

  this.getCount = function () {
    return _count
  }
}

const counter = new Counter()
console.log(counter.getCount()); // 0
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getCount());
counter.decrement()
console.log(counter.getCount());

// ------------------------------------------
// Abstraction
// Abstract class (providing a blueprint for subclasses)
class Animall {
  constructor(name){
    this.name = name
  }
  // Abstract method (to be implemented by subclasses)
  makeSound(){
    throw new Error("Method (makeSound) must be implemented")
  }
}

class DOGG extends Animall{
  constructor(name){
    super(name)
  }
  // implementing the abstract method
  makeSound(){
    return "Woff!"
  }
}

// Concrete Subclass
class Cat extends Animall{
  constructor(name){
    super(name)
  }
    makeSound(){
      return "Meow"
    }
}

const dog2 = new DOGG("Buddy")
console.log(dog2.name);
console.log(dog2.makeSound());

const cat = new Cat("Whiskers")
console.log(cat.name);
console.log(cat.makeSound());

// ------------------------------------------DEFINITION
// in this example, we have an abstract class Animal that contains an abstract method makeSound(). The makeSound() method is declared in the Animal class but doesnt provide an implementation. it's meant to be implemented by subclasses like Dog and Cat.

// The Dogg and Cat classes are concrete subclasses that inherit from the Animal class. they implement the abstract method makeSound() wuth their own specific implementations for making sounds.

// By using abstraction, we define a common interface (makeSound()) that each subclass must implement, while hiding the internal details of how each animal makes its sound. this simplifies the code and allows us to work with animals at a higher level of abstraction, without worrying about the specifies of each animal's sound implementation

// ------------------------------------------
// Inheritance
// ES5 Code
function Animel(name) {
  this.name = name
}

// Method shared among all Animel instances
Animel.prototype.makeSound = function () {
  return "Unknown Sound"
}

// Subclass constructor inheriting from Animel
function Deg(name) {
  Animel.call(this, name) //Call the superclass constructor
}

// Setup prototype chain for Deg to inherit from Animel
Deg.prototype = Object.create(Animel.prototype)

// Methid specific to Deg
Deg.prototype.makeSound = function () {
  return 'woof!'
}

// Creating Instances of the classes
const genericAnimal = new Animel("Generic Animel")
const deg = new Deg("Andrea")
console.log(deg);
console.log(deg.makeSound());
// console.log(genericAnimal.name);
// console.log(genericAnimal.makeSound());

// ------------- Refactoring to Classes
// Superclass
class Animal1 {
  constructor(name) {
    this.name = name;
  }

  // Method shared among all Animal1 instances
  makeSound() {
    return "Unknown sound";
  }
}

// Subclass inheriting from Animal1
class Dog3 extends Animal1 {
  constructor(name) {
    super(name); // Call the superclass constructor
  }

  // Method specific to Dog3
  makeSound() {
    return "Woof!";
  }
}

// Creating instances of the classes
const genericAnimal1 = new Animal1("Generic Animal1");
console.log(genericAnimal1.name); // Output: Generic Animal1
console.log(genericAnimal1.makeSound()); // Output: Unknown sound

const dog3 = new Dog3("Buddy");
console.log(dog3.name); // Output: Buddy
console.log(dog3.makeSound()); 

// ------------------------------------------
// Polymorphism
// In JavaScript, polymorphism is typically achieved through method overiding, where a subclassprovides its own implementation of a method that is already defined in the parent class.

// Superclass

class ANIMAL {
  constructor(name){
    this.name = name
  }

  makeSound(){
    return"Unknown sound"
  }
}

class DOG extends ANIMAL{
  constructor(name){
    super(name)
  }

  // Overiding method
  makeSound(){
    return "Woof"
  }
}

class CAT extends ANIMAL{
  constructor(name){
    super(name)
  }

  // Overiding method
  makeSound(){
    return "Meow"
  }
}

function animalinfo(animal) {
  console.log(`Name: ${animal.name}`);
  console.log(`Sound: ${animal.makeSound()}`);
}

const genericAnimaL = new ANIMAL("generic Animal")
animalinfo(genericAnimaL)

const DoG = new DOG("ANDREA")
animalinfo(DoG)

const cAt= new CAT("WHISKERS")
animalinfo(cAt)

// ------------------------------------------DEFINITION
// In this example, we have a superclass Animal with a constructor that initiates the name property and a method makeSound() that returns "Unknown sound" by default.

// The subclasses Dog and Cat inherit from Animal and overirde the makeSound() method with their specific implementations

// The animalInfo() function takes an Animal object (or any of its subclasses) as a parameter and calls both the name property and the makeSound() method on that object.

// Now, let's see how this demonstrates polymorphism

//  -> when we call animalInfor(genericAnimal), the function prints the name of the animal as " Generic Animal" and the sound as "Unknown sound" This is because genericAnimal is an instance of the animal class, and the method makeSound() is called from the animal superclass

//  -> when we call animalInfo(dog), the function prints the name of the animal as "Andrea" and the sound as "Woof" This is because dog is an instance of the Dog class, and the method makeSound() is called from the Dog subclass overriding the method from the animal super class.

//  -> when we call animalInfo(cat), the function prints the name of the animal as "Whiskers" and the sound as "Meow" This is because cat is an instance of the cat class, and the method makeSound() is called from the cat subclass overriding the method from the animal super class.

// This behavior illustrates the polymorphism, as the animalinfo() function can work with different types of animals (Animal, Dog, or Cat) in a generic way, without knowing the specifc subclass. The appropriate method implementation is determined at runtime based on the actual type passed to the function