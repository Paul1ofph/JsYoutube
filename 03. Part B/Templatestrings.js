// Template strings also known as template literals, are a feature in Javascript that allows you to create strings with embedded expressions. they are denoted by backticks `` instead of a single or double quotes. Template strings provide a more flexible and concise way to construct strings especially when they involve variables or expressions.

console.log('hello');
// console.log('This is some random
// text');, //if you want to break the line of your code you will need a forward slash as shown below as this one will give you an error 
console.log('this is some\
random text'); 
// or we could use a template literals as shown below
console.log(`this is some
    random text`); // whereas backticks will print the output as it is in the code 

    // console.log(`${2 + 2}`);
    const firstName = "Paul"
    const lastName = "ofPH"

    console.log(`My name is: ${firstName} ${lastName}`);
    console.log(`${['one', 'two', 'three']}`);

    function info() {
        return `My name is Paul ofPh & i'm 19 years old`
    }

    console.log(`${info}`); //to print out the function code
    console.log(`${info()}`); // get the content of the function

    function name() {
        return `The quick briwn fox jumps
         over the lazy dog`
    }

    const firstName1 = "Paul"
    const lastName1 = "ofPH"

    console.log(`${firstName1} ${lastName1}`);
    console.log(`${name()}`);

    // Arrow Functions,  also known as fat arrow functions, are a concise and shorter way to define functions in Javascript. They were introduce in ECMAScript 6 (ES6) and provide a more compact syntax compaared to traditional function expressions

    // function greet(username) {
    //     return`hello ${username}`
    // }
    greet = username =>  //if you have more than oen parameters then you will need to add the paranthesis but if you have only one parameters the paranthesis are not needed but if you dont have any parameters then you just put an empty paranthesis ()
        `hello ${username}`
    // the above formatting is if you have a single function and a line of code
    console.log(greet("Paul"));

    const double = number =>  number * 2
    console.log(double(10));

    setTimeout (()=> {
        console.log("hello");
        setTimeout (() => {
            console.log("hey");
            setTimeout (() => {
                console.log("Namasate");
                setTimeout (() => {
                    console.log("hi");
                    setTimeout (() => {
                        console.log("Bonjour");
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)

    // Enhanced object literals, Twas introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in javascript. These enhancments make it more convinient and concise to define object properties and methods

    function user(name, age, work) {
        return {
            name,
            age,
            work,
            // methods in Enhanced object literals
            intro: () => {
                console.log(`My name is ${name}, and i am ${age} years old and i am a ${work}`);
            },
        }
    }
// enhancced object literals helps us write a code for many users and shorten our code
    const Paul = user ("Paulofph", 19, "Programmer")
    const Alex = user ("Alex", 59, "designer")
    console.log(Paul);
    console.log(Alex);
    console.log(Paul.intro());

    function user5(a, b, c) {
        return {
            a,
            b,
            c,
        }
    }

    const varv = user5 (1, 2, 3)
    console.log(varv);

    const a = 1
    const b = 2
    const c = 3

    const obj = {a, b, c}

    console.log(obj);

    const lib = { 
        sum: (a1, b1 ) => a1 + b1,
        multi: (a1, b1) => a1 * b1
    }

    console.log(lib.sum(2, 3));
    console.log(lib.multi(2, 3));
    
    function getPersionES6(name, age, height) {
        return {
            name,
            age,
            height,

        }
    }
    const ES6 = getPersionES6 ("Paulofph", 19, "6ft")
    console.log(ES6);

    // Default Function Parameters, introduced in ECMAScript 6 (ES6), allow you to assign default values to function parameters. When a function is called, and an argument is not provided for a parameter, the default value will be used instead. this feature makes it easier to handle cases where arguments might be missing or undefined.
    
    function countTo5(count = true) {
        if (count === true) {
            for (let i = 1; i <= 5; i++) {
                console.log(`count: ${i}`);
                
            }
        }
    }

    countTo5()

    function ratings(rate = 0) {
        if (rate === 5) {
            console.log(`High Ratings :)`);
        }else if (rate === 0) {
            console.log(`Low Ratings :(`);
        }
    }

    ratings(5)

    function multiply(a, b=1) {
        return a * b
    }
    console.log(multiply(5, 4));

    // spread operators in java script
    // The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expabds it into individual elements. the spread operator is commonly used to make shallow copies of JS object using this operator makes the code concise and enhance its readability.

    // functions, arrays, objects
    // functions
    function giveMe4(a, b, c, d) {
        console.log("a",a);
        console.log("b",b);
        console.log("c",c);
        console.log("d",d);
    }
    giveMe4(1, 2, 3, 4)
    const colors = ['red', 'green', 'blue', 'teal']
    giveMe4(...colors)

    // using arrays
    const strNums = ['one', 'two', 'three']
    const moreStrNums = ['four', 'five', 'six']
    const concat = [...strNums, ...moreStrNums]
    console.log(concat);

    let peoples = ['Huxn', 'Paul', 'Jordan']
    console.log('kumar', ...peoples, 'john');

    // Using objects
    const obj1 = {x: 1, y: 2}
    const obj2 = {z: 3,}
    const obj3 = {...obj1, ...obj2}
    console.log(obj3);

    let person = {
        name: "Paulofph",
        age : 19,
        gender: 'male'
    }
    const clone = {...person, work: "Programmer", location1: "Earth", }
    console.log(person);
    console.log(clone);

    let arr = [1, 2, 3]
    let arr2 = [4, 5]
    let clonearr = {...arr, ...arr2,}
    console.log(clonearr);

    const user50 = {
        name: "Jen",
        age: 22
    }
    const cloneUser = {...user50, workplace: 'Pluto'}
    console.log(cloneUser);

    // rest operators
    // the rest parameter syntax allows a function to accept indefinite number of arguments as an array providing a way to represent variadic functions in javascript.
    function user5(x5, ...userData) {
        console.log(x5);
        console.log(userData);
    }

    user5("Huxn", 19, "Programmer", "footall")

    function person50(firstName3, lastName3, ...hobbies3) {
        console.log('firstname:', firstName3);
        console.log('lastName:', lastName3);
        console.log('hobbies:',hobbies3);
    }

    person50("Huxn", "WebDev", "footbal", "programming", "singing")

    function unlimitedAmount(...params5) {
        console.log('Unlimited amount of parameters:', params5);
    }

    unlimitedAmount("cars", "shapes", "angles")
    console.log("cars", "shapes", "angles")

    // Destructuring
    // Destructuring allows us to "unpack" values from data-structures (Arrays, objects) into seperate distinct variables.

    // Arrays
    const food = ['one', 'two', 'three']
    // const [one, two, three] = food
    const [huxn, apple, green, blue] = food
    // console.log(one);
    // console.log(two);
    // console.log(three);
    console.log(huxn);
    console.log(blue);

    let ar, br
    [ar = 5, br = 8]/*default value*/ = ['one', 'two']//new value
    console.log(ar); //therefore if you log to the console the output will be the new value

    // storing restoring a data from a function
    function f() {
        return [1, 2]
    }
    let a6, b6
    [a6, b6] = f()
    console.log(a6);
    console.log(b6);

    // ignoring some return values from a function
    function g() {
        return[1, 2, 3]
    }
    const [y, , z] = g()
    console.log(y);
    console.log(z);

    // assigning the rest of an array to a variable
    const [a15, ...b15] = ["one", "two", "three"]
    console.log(a15);
    console.log(b15);

    function color() {
        return ['red', 'green', 'blue', 'yellow', 'orange']
    }
    const [color1, color2, color3] = color()
    console.log(color1);
    console.log(color2);
    console.log(color3);

    //  object destructuring
    // in object destructuring order doesnt matter but the name does matter

    const student = {name10: "Paul", postion: "First", rollNo: "27"}
    const {name10, postion, rollNo} = student
    console.log(name10);
    console.log(postion);
    console.log(rollNo);

    const person51 = {
        name15: "John Doe",
        age: 30,
        gender: "Male",
        country: "USA",
    }
    const {name15, age, gender, country} = person51
    console.log(name15, age, country);

    // renaming or destructuring in javascript
    const num = {x: 100, y: 200}
    const {x: new1, y:new2} = num
    //console.log(x); //error because the name has been changed to new1
    //console.log(y); //error because the name has been changed to new2
    console.log(new1);
    console.log(new2);

    // object destructuring and rest operators
    let {a20, b20, ...rest5} = {a20: 1005, b20: 2005, c20: 3005, d20: 4005, e20: 5005}
    console.log(a20);
    console.log(b20);
    console.log(rest5);

    const person20 = {
        name: "John Dee",
        age: 30,
        gender: "male",
        country: "USA",
    }
    const {name: personName, age: personAge, country: personCountry,} = person20
    console.log(personName);
    console.log(personAge);
    console.log(personCountry);

    // function destructuring
    const person2 = {
        name30: "John Paul",
        age: 50,
        country: "Nigeria",
    }
    // function printPersonInfo(person) {
    function printPersonInfo({name30, age, country}) {
        // console.log(`Name: ${person2.name30}`);
        console.log(`Name: ${name30}`);
        // console.log(`Age: ${person2.age}`);
        console.log(`Age: ${age}`);
        // console.log(`Country: ${person2.country}`);
        console.log(`Country: ${country}`);
    }

printPersonInfo(person2)

let options = {
    title: "My menu",
    items: ['item1', 'item2']
}

function showMenu({
    title = "Untitled", 
    widtth: w = 100, 
    height:h = 200, 
    items: [item1, item2]
}) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
}

showMenu(options)

// Nested destructuring in javascript 
const songs = [
    {name: " lucky you", singer: "Joyner", duration: 4.34},
    {name: " lucky you", singer: "Burna boy", duration: 4.34},
    {name: " lucky you", singer: "Davido", duration: 4.34},
    {name: " lucky you", singer: "Wizkid", duration: 4.34},
    {name: " lucky you", singer: "Rema", duration: 4.34},
]

const [, , {singer}] = songs
console.log(singer);

// destructuring mixture
const data = {
    user1: {
        id: 123,
        name1:"John Paul",
        age1: 30,
        email1: "John.doe@example.com",
        address: {
            city: "New York",
            country1: "USA"
        },
        hobbies : ["Reading", "Painting", "Cooking"],
        scores: {
            Math: 95,
            science: 88,
            history: 75,
        },
    },
    products: [
        {id: 1, name: "Laptop", price: 1000},
        {id: 2, name: "Phone", price: 800},
        {id: 3, name: "Tablet", price: 500},
    ],
    settings: { 
        darkMode: true,
        notifications : {
            email: true,
            sms: false, 
            push: true
        },
        language: "English",
    },
};

const {
    user1: {
        name1, age1, address: {city, country1},
        hobbies,
        scores: {Math, science, history},
        email,
    },
    products: [product1, products2, products3],
    settings:{
        darkMode,
        notifications:{
            email: emailNotification,
            sms: smsNotification,
            push: pushNotification,
        },
        language,
    },
} = data

console.log(`Name: ${name1}`);
console.log(`Age: ${age1}`);
console.log(`Address: ${city}, ${country1}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math score: ${Math}`);
console.log(`Science score: ${science}`);
console.log(`History score: ${history}`);
console.log(`Product1: ${product1.name} - ${product1.price}`);
console.log(`Product2: ${products2.name} - ${products2.price}`);
console.log(`Product3: ${products3.name} - ${products3.price}`);
console.log(`Darkmode: ${darkMode}`);
console.log(`Email Notification: ${emailNotification}`);
console.log(`SMS Notification: ${smsNotification}`);
console.log(`Push Notification: ${pushNotification}`);
console.log(`Language: ${language}`);

// The ternary operator in javascript is a concise way of writing conditional expressions. it is the onlu javascript operator that takes three operands: a condition followed by a colon(:), and an expression to execute if condition is false.

// condition ? exprIfTrue : exprIfFalse;
//it is a shorter way of writing the if and else statements but not the else if statements

let password =  2
function passwordChecker(ps) {
    // if (ps === 8) {
    //     return `Strong Password`
    // }else{
    //     return "Password should be 8 characters."
    // }
// ternary operator
    return ps === 8 ? 'Strong Password' : "password should be 8 characters"
}

const res = passwordChecker(8)
console.log(res);

const age5 = 2

const isAdult = age5 >= 18? "Adult" : "Not an Adult"

console.log(isAdult);

const person3 = true
const ifMoney = person3 === true? "buy products" : "come back with money"

console.log(ifMoney);

// for in loop
// The "for ... in" loop in Javascript is used to iterate over the enumerable properties of an object. it is a way to loop through the keys (property names of an object.)

// for (let key in object) {...}

let person4 = {
    name4 : "Paulofph",
    age4 : 19,
    gender4 : "male"
}

for ( let key in person4){
    console.log(key, person4[key]);
}

let list = ['one', 'two', 'three', 'four']
for (let index in list) {
    console.log(`${index}: ${list[index]}`);
}

const object = { a2:1, b2:2, c2:3}
for (const properties in object){
    console.log(properties, object[properties]);
}

// For of loop
// The "for ... of" loop in Javascript is a modern iteration statement introduced in EcmacScript 6 (ES6) that provides a concise and easy way to loop over elements in iterable projects like arrays, strings, maps, sets, and more. if allows you to iterate directly over values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.

// for (variable of iterable) {...}

let peroples = ["Paulofph", "Samuel", "Alex", "John", "Brad"]
for (let people of peroples){
    console.log(people);
}

const text = "Hello"
for (const char of text) {
    console.log(char);
}

const array1 = ["a", "b", "c"]
for (const array of array1) {
    console.log(array);
}

// for each helper
// when we cal a forEach helper we pass in anonymous callback function,
// this function gets called one time for every element in the array
// Whatever is inside the function that logic happens

const colores = ["teal", "blue", "red", "green"]
// for (var i = 0; i < colores.length; i++) {
//     console.log(colores[i]);
// }

colores.forEach((colore) => console.log(colore))

const words = ["hello", "bird", "football", "pipe", "code"]
const capWords = words.forEach((word, index, arr)=>{
    arr[index] = word[0].toUpperCase() + word.substring(1)
})

console.log(words);

let numbers =  [1, 2, 3, 4, 5]
let sum = 0 
function adder(number) {
    sum += number
}

numbers.forEach(adder)
console.log(sum);

// Map method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numberers = [1,2,3,4,5]
let double1 = numberers.map(num1 => num1*2)
console.log(numberers);
console.log(double1);

let peoples5 = [
    {firstNme5: "Macom", lastName5: "Reynolds"},
    {firstNme5: "Kaylee", lastName5: "Frye"},
    {firstNme5: "Jayne", lastName5: "Cobb"},
]

const results3 = peoples5.map(person => {
    return[person.firstNme5, person.lastName5]
})

console.log(results3);

let randomNumber = [1, 2, 3, 4, 5]
let multiplyBy10 = randomNumber.map(num5 => num5*10)
console.log(randomNumber);
console.log(multiplyBy10);

const numbers5 = [65, 44, 12, 4]
function myFunction(num) {
    return num * 10
}
const newArr = numbers5.map(myFunction)
console.log(newArr);

// filter method
// the filter() method is a built in array method in javascript that allows you to create a new array containing elements that pass a certain condition. it provides a clean and concise way to filter out elements from an array based on a specified criteria.

const songs1 = [
    {name: " lucky you", singer: "Joyner", duration: 4.34},
    {name: " just lucky you", singer: "Burna boy", duration: 2.34},
    {name: " the search", singer: "Davido", duration: 4.34},
    {name: " Old town road", singer: "Wizkid", duration: 1.34},
    {name: " The box", singer: "Rema", duration: 5.34},
]

console.log(songs1.filter(song => song.duration>3));

const computers = [
    {ram: 4, hdd: 100},
    {ram: 8, hdd: 200},
    {ram: 16, hdd: 300},
    {ram: 32, hdd: 400},
];

console.log(computers.filter(com => com.ram > 16));
console.log(computers.filter(com => com.ram < 16));

const ages = [32, 33, 16, 40]
console.log(ages.filter(adults => adults > 18));

function checkAdults(age) {
    return age > 18
}

const res1 = ages.filter(checkAdults)
console.log(res1);

const words1 = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
]
console.log(words1.filter(len => len.length > 6));

// the find() method
// the find method is another built in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition. it returns the value of the first element that satisfies the giving testing function, or undefined if no element is found.

const peoples6 = [
    {name5: 'Huxn', age6: 17}, 
    {name5: 'Paul' , age6: 18}, 
    {name5: 'Jordan' , age6: 20},
    {name5: 'John' , age6: 30},
    {name5: 'alex' , age6: 30},
    {name5: 'Alex' , age6: 30}
]

const res5 = peoples6.find(person10 => person10.name5 === 'alex')
console.log(res5);

const posts = [
   {id: 1, content: "Good Post"}, 
   {id: 2, content: "funny Post"}, 
   {id: 3, content: "Sad Post"}, 
]

// const res6 = posts.find(post => post.content === 'funny Post')
const res6 = posts.filter(post => post.content === 'funny Post')
console.log(res6);

const ages1 = [3, 10, 18, 20]
const agesRes = ages1.find(old => old > 18)
console.log(agesRes);

function checkAge(age7) {
    return age7 > 18
}

const res7 = ages1.find(checkAge)
console.log(res7);

let products4 = [
    {bookName: 'Checkers', category: 'Toys'},
    {bookName: 'Harry Potter', category: 'Books'},
    {bookName: 'Iphone', category: 'Electronics'},
    {bookName: 'Learn PHP', category: 'Books'},
]

let products5;
for (let i = 0; i < products4.length; i++) {
    if (products4[i].category === "Books") {
        products5 = products4[i]
        break;
    }
    
}

console.log(products5);
// const product6 = products4.find(pro => pro.category === "Books")
const product6 = products4.filter(pro => pro.category === "Books")
console.log(product6);

// The every() and some() are two built-in array methods in Javascript that allow you to check the elements of an array based on a given condition. both methods take a callback function as an argument, which is applied to each element of the array.

// The every() method tests whether all elements in the array pass the condition specified by the provided callback function. it returns true if the callback function returns true for every element and false if any element fails the condition.

// The some() method tests wheather at least one element in the array passes the condition specified by the provided function. it returns true if the callback function returns true for at least one attempt and false if no element passes the condition.

// const people7 = ['huxn', 'jordan', 'alex'] //false
const people7 = ['huxn', 'john', 'alex'] //true
const res8 = people7.every(people7 => people7.length === 4)
const res9 = people7.some(people7 => people7.length <5)
console.log(res8);
console.log(res9);

const songs2 = [
    {name: " lucky you", singer: "Joyner", duration: 4.34},
    {name: " just lucky you", singer: "Burna boy", duration: 2.34},
    {name: " the search", singer: "Davido", duration: 4.34},
    {name: " Old town road", singer: "Wizkid", duration: 1.34},
    {name: " The box", singer: "Rema", duration: 5.34},
]

const everyRes = songs2.every((song) => song.duration > 3)
const someRes = songs2.some((song) => song.duration > 3)
console.log(everyRes);
console.log(someRes);

let products6 = [
    {bookName: 'Checkers', category: 'Toys'},
    {bookName: 'Harry Potter', category: 'Books'},
    {bookName: 'Iphone', category: 'Electronics'},
    {bookName: 'Learn PHP', category: 'Books'},
]

const everyProductRes = product6.every(book => book.category === "Books")
const someProductRes = product6.some(book => book.category === "Books")
console.log(everyProductRes);
console.log(someProductRes);

// The reduce() method applies the reducer function to each element of an array. accumulating the results into a single value. it is often used to perform calculations or aggregations on array elements and simplify the array into a single value
console.log("REDUCE() METHOD");
const numbers6 = [1, 2, 3, 4, 5]

const sum2 = numbers6.reduce((p, c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    return p + c
}, 0)

console.log(sum2);

const peoples7 = [
    {
        name2: "PaulofPh",
        age2 : 20,
    },

    {
        name2: "Huxn WebDev",
        age2 : 25,
    },

    {
        name2: "Alex",
        age2 : 29,
    },
]

const oldestAge = peoples7.reduce((d, e) => (e.age2 > d ? e.age2 : d), 0)
console.log(oldestAge);

const words2 = [
    "apple",
    "bannana",
    "orange",
    "bannana",
    "apple",
    "orange",
    "apple",
    "grape",
]

const wordFrequency = words2.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0 + 1)
    return frequencyMap
}, {})

console.log(wordFrequency);

const calculateProducts = [ 2, 3, 4, 5]
const products1 = calculateProducts.reduce((product23, product24) =>{
    console.log(`Product23 ${product23}`);
    console.log(`Product24 ${product24}`);
    return product23 * product24
},1)

console.log(products1);

console.log("MAPS");

// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. it is similiar to an object, but with a few key differences.

// -> Keys can be of any data type: Unlike objects, where keys are limited to string and symbols, Map allows you to use any data type as keys including numbers, booleans, objects and even other Map instances.

// -> Maintain insertion order: Map preserves the order of key value pairs as they are  inserted, while object keys may not be guaranteed to be in a specific order.

// -> Iteration: Map provides built-in-methods for easy iteration over its elements.

const map = new Map()

const keyOne = "string"
const keyTwo = {}
const keyThree = function() {}

map.set(keyOne, "Value of Key One")
map.set(keyTwo, "Value of Key Two")
map.set(keyThree, "Value of Key Three")
console.log(map.keys());
console.log(map.values());
console.log(map);
console.log(map.delete(keyTwo));
console.log(map.size);
console.log(map);

for (let key of map.keys()){
    console.log(key);
}

for (let value of map.values()){
    console.log(value);
}

const newMap = new Map()


newMap.set("a", 1)
newMap.set("b", 2)
newMap.set("c", 3)

console.log(newMap);
console.log(newMap.get("a"));
console.log(newMap.size);
console.log(newMap.delete("b"));
console.log(newMap.size);

// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values, unlike arrays, set allows you to store only unique values which means duplicate values are automatically removed. each value can occur only once within a set

// Set objects are useful when you need to store a list of unique elements and quickly check for existence of specific values

// const initialValues = [1, 2, 2, 3] // the duplicate 2 will be automatically removed

// const mySet = new Set(initialValues)
const mySet = new Set()

mySet.add("apple")
mySet.add("orange")
mySet.add("bannana")
mySet.add("apple")

console.log(mySet);
console.log(mySet.has("apple"));
mySet.delete("orange")

for (let item of mySet){
    console.log(item);
}

const letters = new Set () 
    letters.add ( "a"),
    letters.add ( "b"),
    letters.add ( "c"),


console.log(letters);
for (let value of letters){
    console.log(value);
}
//  Symbol is a unique and immutable primitive data type introduced in ECMACScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique when you create a symbol, it is unique and cannot be recreated or changed. the uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.

 const mySymbol = Symbol("My custom symbol")
//  console.log(typeof mySymbol);
 console.log(mySymbol);

 const mySymbol1 =  Symbol("name")
 const mySymbol2 =  Symbol("name")
//  console.log(mySymbol1 === mySymbol2);
//  const obj4 = {}
//  obj4[mySymbol1] = "Value1"
//  obj4[mySymbol2] = "Value2"

//  console.log(obj4);

const huxn1 = {}
huxn1.age = 19
huxn1['gender'] = 'male'
huxn1['gender'] = 'female'
huxn1[mySymbol1] = 'alex'
huxn1[mySymbol2] = 'john'
console.log(huxn1);

const newSymbol = Symbol("foo")
console.log(typeof newSymbol);

const emptyObject = {}
emptyObject[Symbol("foo")] = 'value for foo'
console.log(emptyObject);

for (let i in emptyObject) {
    console.log(i);
}