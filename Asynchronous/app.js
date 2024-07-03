// // Synchronous Code
// function myFunc() {
//     console.log('inside function');
// }

// console.log("Start");
// myFunc()
// console.log('End');

// // Asynchronous Code
// console.log('Start');

// setTimeout(() => {
//     console.log('Inside SetTimeout');
// }, 2000);

// console.log('End');

// // Callback 
// function callbackHell(callback) {
//     setTimeout(() => {
//         const data = "Inside (callbackHell) function"
//         console.log((data));
//         callback(data)
//     }, 2000);
// }

// function firstFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed First`
//         console.log(`inside (firstfunc) Function`);
//         callback(processedData)
//     }, 1000);
// }

// function secondFFunc(data, callback) {
//     setTimeout(() => {
//         const processedData = `${data} - Processed Second`
//         console.log(`inside (secondfunc) Function`);
//         callback(processedData)
//     }, 1500);
// }

// // Callback Hell
// callbackHell((data) =>{
//     firstFunc(data, (processedData1) =>{
//         secondFFunc(processedData1, (processedData2)=>{
//             console.log(`The final result of all functions: ${processedData2}`);
//         })
//     })
// })

// // Callback is not always asynchronous
// console.log('Start');
// const numbers = [1,2,3,4,5,6,7,8,9,0]

// numbers.forEach((n) => console.log(n));
// console.log('End');

// // QUICK CALLBACK CHALLENGE

// console.log('Start');
// function getUserDataFromDB(name, callback) {
//     setTimeout(() => {
//         console.log(`Get User Name...`);
//         callback(name)
//     }, 2000);
// }

// function getUserHobbies(name, callback) {
//     setTimeout(() => {
//         console.log("Getting user hobbies...");
//         callback(['eating', 'sleeping', 'coding'])
//     }, 2000);
// }
// getUserDataFromDB("Paul", (data) =>{
//     console.log(data);
//     getUserHobbies(data, (hobby) =>{
//         console.log(hobby);
//     })
// })
// console.log('End');


// //-------------------------------
// // PROMISE
// function checkNumber(number) {
//     return new Promise((resolve, reject) =>{
//         if (number % 2 === 0) {
//             resolve(`${number} is an even number.`)
//         }else{
//             reject(`${number} is an odd number.`)
//         }
//     })
// }

// // const numberToCheck = 7 //odd
// const numberToCheck = 6 //even
// checkNumber(numberToCheck).then((message)=>{
//     console.log(`Success: ${message}`);
// }).catch(error =>{
//     console.log(`${error}`);
// })

// function callbackHell(callback) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = "Inside (callbackHell) function"
//             console.log(data);
//             resolve(data)
//         }, 2000);
//     })
// }

// function firstFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`
//             console.log("Inside (FirstFunc) function");
//             resolve(processedData)
//         }, 2000);
//     })
// }

// function secondFFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`
//             console.log("Inside (secondFFunc) function");
//             resolve(processedData)
//         }, 1500);
//     })
// }

// callbackHell().then(data => firstFunc(data)).then((processedData1) => secondFFunc(processedData1)).then(processedData2 => console.log(`Final result of all functions with promises: ${processedData2}`))
// .catch(error => console.log(`Error: ${error}`))




// function getUserDataFromDB(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Valid Name");
//             resolve(name)
//         }, 2000);
//     })
// }

// function getUserHobbies() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Getting User hobbies");
//             resolve(["Cricket", "Reading", "Dancing"])
//         }, 2000);
//     })
// }

// getUserDataFromDB("Huxn")
// .then(name => getUserHobbies(name)).then((hobby) => console.log(hobby)).catch((err) => console.log(err))

// //-------------------------------
// // Async
// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User data retrieved from the server using ASYNC.")           
//         }, 4000);
//     }) 
// }

// async function getuserData() {
//     try {
//         const data = await fetchDataFromServer()
//         console.log(data);
//         console.log("Remaining task can be executed here");
//     } catch (error) {
//         console.log(error);
//     }
// }

// getuserData()

// function callbackHell() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const data = 'Inside (CallbackHell) function'
//             console.log(data);
//             resolve(data)
//         }, 2000);
//     })
// }

// function firstFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`
//             console.log("Inside (FirstFunc) function");
//             resolve(processedData)
//         }, 2000);
//     })
// }

// function secondFFunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`
//             console.log("Inside (secondFFunc) function");
//             resolve(processedData)
//         }, 1500);
//     })
// }

// async function callback() {
//     try {
//         const data = await callbackHell()
//         const processedData1 = await firstFunc(data)
//         const processedData2 = await secondFFunc(data)
//         // console.log(data);
//         console.log(`Final result of all functions with async/await: ${processedData2}`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// callback()

function getUserDataFromDB(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Valid Name");
            resolve(name)
        }, 2000);
    })
}

function getUserHobbies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting User hobbies");
            resolve(["Cricket", "Reading", "Dancing"])
        }, 2000);
    })
}

async function userdata() {
    try {
        const userdata = await getUserDataFromDB("Paul")
        const userhobbies = await getUserHobbies(userdata)
        console.log(`Final result of all functions with async/await: ${userhobbies}`);
    } catch (error) {
        console.log(error);
    }
}

userdata()
