// // // // // if === money
// // // // // BUy some stuff
// // // // // elsee !== money
// // // // // bring some money dude
// // // // let a = 20
// // // // let b = 20
// // // // if (a > b) {
// // // //     console.log("a is greater than b");
// // // // }else if (b > a) {
// // // //     console.log("b is greater than a");
// // // // }else{
// // // //     console.log('a is equal to be');
// // // // }

// // // // let time = 10
// // // // let greetings;

// // // // if (time < 10) {
// // // //     greetings = "Goodmorning"
// // // // }else if (time < 20) {
// // // //     greetings = "good day"
// // // // }else{
// // // //     greetings = "goodevening"
// // // //     console.log(greetings);
// // // // }

// // // // let password;
// // // // if (password === 8) {
// // // //     console.log("Welcome");
// // // // }else if (password <= 8) {
// // // //     console.log("password is short");
// // // // }else if (password >= 8) {
// // // //     console.log("too long password", "password should be 8 characters");
// // // // }else{
// // // //     console.log("please provide a password");
// // // // }

// // // // // switch statements

// // // // // switch (expression) {
// // // //     //  case value :
// // // //         // code block to be executed if the expression matches the value of case
// // // //         // break keyword is optional but it’s recommended to use because it prevents further execution of the code in that scope once the matching case has 
// // // // // }

// // // // let x = 5
// // // // let bulb
// // // // switch (x) {
// // // //     case 0:
// // // //         bulb = "off"
// // // //         console.log(bulb);
// // // //         break;
// // // //     case 1:
// // // //         bulb = "on"
// // // //         console.log(bulb);
// // // //         break;
// // // //     default:
// // // //         bulb = "no value found"
// // // //         console.log(bulb);
       
// // // // }

// // // // let day = 'monday'

// // // // switch (day) {
// // // //     case "monday":
// // // //         console.log('Today is Monday');
// // // //         break;
// // // //     case "tuesday":
// // // //         console.log(('today is tuesday'));
// // // //         break
// // // //     case "fridday":
// // // //         console.log(('ThankGod its Friday'));
// // // //         break
// // // //     default:
// // // //         console.log("Its weekend");
// // // //         break;
// // // // }

// // // // let fruit = "bananna"

// // // // switch (fruit) {
// // // //     case 'bananna':
// // // //         console.log('Bananna is good');
// // // //         break;
// // // //     case 'orange':
// // // //         console.log('I am a fan of orange');
// // // //         break;
// // // //     case 'apple':
// // // //         console.log('How you like them Apples?');
// // // //         break;        
// // // //     default:
// // // //         console.log('i have never heard of that fruit');
// // // // }

// // // // // for loop
// // // // // DRU = dont repeat yourself
// // // // // alt + shift + arrow down
// // // // // console.log('hello paul');
// // // // // for loop syntax
// // // // // for (initial expression; condition; increment expression){}

// // // // // for (let i = 0; i <= 5; i++) {
// // // // //     console.log("hello world", i);
    
// // // // // }

// // // // for (let i = 1; i <= 5; i++) {
// // // //     console.log('--- outer loop ---');
// // // //     // nested loop
// // // //     for (let j = 1; j <= 5; j++) {
// // // //         console.log('--- inner loop ---', j);
        
// // // //     }
// // // // }

// // // // for (let name = 0; name <= 1000; name++) {
// // // //     console.log('Paulofph', name);
    
// // // // }

// // // // // while loops
// // // // // while (condition){
// // // //     // code block to be executed
// // // // // }

// // // // let i = 1
// // // // while (i <= 5) {
// // // //     console.log('hello world', i);
// // // //     i ++
// // // // }

// // // // let j = 10
// // // // while (j <= 100) {
// // // //     console.log('Paulofph', j);
// // // //     j++
// // // // }

// // // // do while loop
// // // let i = 1
// // // do {
// // //     console.log('hello world', i);
// // //     i ++    
// // // } while (i <= 5);

// // // let name = 20
// // // do {
// // //     console.log('Paulofph', name);
// // //     name ++    
// // // } while (name <= 400);

// // // logical operators
// // // logical AND &&
// // // gives true if both the operands/ boolean values are true. else evaluates to false

// // const a = true
// // const b = false
// // const c = 4

// // console.log( a && b, 'and operator');
// // console.log(c > 2 && c < 2, 'and operator');

// // // Logical OR ||
// // // true if either of the operands/booleans values is true evaluates false if both are false

// // console.log( a || b, 'or operator');
// // console.log(b || b, 'or operator');
// // console.log(c > 2 || c < 2, 'or operator');

// // // logical NOT !
// // // true if the oeprands is false vice versa

// // console.log(!a, 'not operator');
// // console.log(!b, 'not operator');

// // let password = "Paulofph"

// // if (password.length >= 8 && password.includes("of")) {
// //     console.log("Valid Password");
// // }else {
// //     console.log("invalid Password");
// // }

// // // arrays = 0 index based data structures which allows us to store multiple data at once
// // // empty array
// // // const or let keyword
// // const myList = []
// // console.log(myList);

// // const numbersArray = [1, 2, 3, 4, 5]
// // console.log(numbersArray);

// // const string = ['eat', 'code', 'sleep', 'repeat']
// // console.log(string);

// // // accesing items from array
// // console.log(string[0]);
// // console.log(string[1]);
// // console.log(string[2]);
// // console.log(string[3]);

// // // nested array
// // const nestArr = ['one', ['two', 'three'], 1, true, false]

// // console.log(nestArr);
// // console.log(nestArr[1][1]);

// // const myLetter = ['h', 'e', 'l', 'l', 'o']
// // console.log(myLetter);

// // const favSingers = ['DAvido', 'Burnaboy', 'Wizkid']
// // console.log(favSingers[0]);

// // const favNumbers = ['1', '4', '5', '7']
// // console.log(favNumbers);
// // const mixedArr = ['string', ['otherarray'], 123, true]
// // console.log(mixedArr[0]);
// // console.log(mixedArr[1]);
// // console.log(mixedArr[2]);
// // console.log(mixedArr[3]);

// // // basic array
// // // concat()
// // // includes()
// // // push()
// // // unshift()
// // // pop()
// // // shift()
// // // sort()
// // // slice()
// // // splice()

// // const fruits = [
// //     "apples",
// //     "pomegranate",
// //     "grapefruits",
// //     "mango",
// //     "strawberry",
// //     "pineapple"
// // ]
// // const moreFruits = [" dart", ' boards']
// // console.log(fruits.length);
// // // fruits.push('Banana') //adds element at the end of an array
// // // fruits.pop() //removes element from the end of the array
// // // fruits.shift() // removes element at the begining of an array
// // // fruits.unshift('orange') //adds elemnt at the begining of the array
// // console.log(fruits);
// // console.log(fruits.length);
// // // concat
// // console.log(fruits.concat(moreFruits));

// // // const pl = ['Javascript', 'Golang', 'Python', 'PHP']
// // // const num2 = [3, 5, 2, 4, 1]

// // // // console.log(pl.includes('Golang'));
// // // // console.log(pl.join('-'));
// // // // console.log(pl.reverse());
// // // console.log(pl.slice(0, 2));
// // // console.log(num2.sort);


// // objects in javascript
// // note in arrays we used square brackets [] but in objects we will use curly brackets{}
// const person = {
//     firstName : 'Paul',
//     lastName : "Ofph",
//     age : 19,
//     location1: ['Planet', 'Earth'],
//     isProgrammer : true,
    
// }
// console.log(person);
// // accesing items from an object
// console.log(person.age); //using the dot . notation
// console.log(person[`lastName`]); // using template literals `` '' ""

// // adding extra informTION TO THE ARRAY
// const animal = {
//     firstName: "lion", 
// }
// animal.lastName = 'King',
// delete animal.firstName //to delete something from the array
// console.log(animal);

// const car = {
//     type : 'Mercedez',
//     model : 'Benz',
//     color : 'Black',
// }
// console.log(typeof(car));

// car.type = "Toyota",
// car.wheels = "Toyota wheels"

// console.log(car);

// Functions
// A function is a block of code that performs a specific task. funciton makes the code reusable. you can declare it once and use it multiple times. function makes the program easier as each small task is divided into a function. function increases readability. DRY- do not repeat yourself 
// FUnction name(parameterIfAny) {....}

function greet() {
    console.log('hello from a function');
}

// call, run, execute
greet() //without calling the function the function wont run

function sayHello(name) {
    console.log(`hello ${name}`);
}
sayHello() //to pass a value to the parameter you do it in the called function as shown below
sayHello('Paulofph')

// return keyword in function
function add(x, y) {
    return x + y 
}
// add(10, 20)
// console.log(add(10, 20));
const res = add(10, 20)
console.log(res);
const res1 = add(100, 200)
const res2 = add(105, 205)
const res3 = add(103, 203)
 console.log(res1);
 console.log(res2);
 console.log(res3);

 function myFunction(a, b) {
    return a * b
 }
 const multiply = myFunction(5, 5)
 console.log(multiply);

//  function declaration
function sayHello(username) {
    console.log(`hello ${username}`);
}
sayHello('Paulofph')
// function expression
const greetings = function (user) {
    console.log(`hello ${user}`);
}

greetings('John')
// in function expression if you pass the value before creating the function it will produce an error but its the opposite in function declaration.


// Callback function
// when we provide a function as an (argument) to other function that function is known as a callback function

function showCallFunc(fn) {
    const value = 10
    fn(value)
}

showCallFunc(function(value){
    console.log(value);
})

// function greet(name, cb) {
//     console.log(`hello ${name}`);
//     cb();
// }
// function cb() {
//     console.log(`i am a callback function`);
// }
// greet("john", cb)
// the above code displayed error in the console
// learn about callback function

function showCallFunc(fn) {
   const x = 10
    fn(x)
}

showCallFunc(function(x) {
    console.log("callback", x);    
}) 

// scope in javascript
// scope in javascript refers to the current context of code, which determines the accesebility of variables to javascript.

// there are two types of scopes in javascript
// Global scope variables are those outside of a block
// local scope variables are those declared inside of a block.

// Global scope varriable: accesible outside the block {}
let textMessage = "hi"
console.log(textMessage);

// local scope varriable its only accesible inside the block {} curly braces which is why the variable name textMessage isn't giving us error
function showMessage() {
    let textMessage = "hello"
    console.log(textMessage);
}
showMessage()

for (let i = 0; i < 5; i++) {
    console.log(i);  
}
// console.log(i); //this will run an error cause i is a local and not variable

// Methods => A funtion inside an object

const person = {
    name:"John",
    age : 30,
    greet: function() {
        return `hello, my name is ${person.name} & i am ${person.age} years old.`;
    },
}
console.log(person.greet());

// json in java script :JAva script object notation
// used to transmit data between servers and web application as far storing configuration settings and data

// how to write a json command
// property key must be double quoted
// {
//     "name": 12 //you can store anything here an integer a variable anything at all
// }
/* remainig course on Json was done in the Json file created */
const person1 = {
    name: "John DOe",
    age : 20,
    email: "js@gmail.com",
    isSubscribed : true,
    hobbies: ["Readin", "Running", "cooking"],
    address : {
        "city": "New YOrk",
        "idk": true
    }
}

// JSON.stringify()
const jsonstring = JSON.stringify(person1);
console.log(jsonstring);

// Json.Parse
const parsedObject = JSON.parse(jsonstring)
console.log(parsedObject);

// Date and Time in Javascript
const currentDate = new Date ()
console.log(currentDate);

// Year
const currentDate1 = new Date (2024, 2, 24, 12, 30, 0, 0)
console.log(currentDate1);

const date =  new Date()

const year = date.getFullYear()
console.log(`Year ${year}`);

// Month
const month = date.getMonth()
console.log(`Month ${month}`);
// Days
const day = date.getDay()
console.log(`day ${day}`);
// hours
const hours = date.getHours()
console.log(`hours ${hours}`);
// Minutes
const minutes = date.getMinutes()
console.log(`minutes ${minutes}`);
// Milliseconds
const Milliseconds = date.getMilliseconds()
console.log(`Milliseconds ${Milliseconds}`);

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

// increment and decrement of dates
// date.setDate(date.getDate() +7)
date.setDate(date.getDate() -7)
console.log(date);

// setInterval
// it is used to repeat the excuter function for a block of code in a specified interval


// setInterval(function () {
//     console.log(`This function will be executed every 2 second`),
//     2000
// })

// setTimeOut
setTimeout(function () {
    console.log(`this function will be executed after 3seconds`)
}, 3000)


// clear interval
// this code will stop the interval after 10 seconds
const interValId = setInterval(function () {
    console.log(`this code is being executed at the interval`);
},1000)

// stop the interval after 10 seconds
setTimeout(function () {
    clearInterval(interValId)
    console.log('interval stopped')
}, 10000)