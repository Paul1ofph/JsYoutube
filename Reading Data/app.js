// console.log(fetch('text.txt'));
// text method returns promise
// if resolved will return text representation of body

const results = document.querySelector(".results")

/* READING A .TXT FILE */

// // fetch("textttttt.txt")
// fetch("text.txt")
// .then(res => {
//     if (!res.ok) throw Error(res.statusText)
//     return res.text()
// })
// .then((data) =>console.log(data))
// .catch(Error => console.log(Error))

// // Fetch API promise only rejects when we have network error(not in other cases)

// // refractor using Async/Await
// async function renderData() {

//     try {
//         const response = await fetch('text.txt')
//         if (!response.ok) throw Error(response.statusText)
//         const data = await response.text()
//         results.textContent = data
//     } catch (error) {
        // console.log(error);
//     }

// }

// renderData()

//-----------------------------------
/* READING A .JSON FILE */

async function renderData() {

    try {
        const response = await fetch('data.json')
        if (!response.ok) throw Error(response.statusText)
        const data = await response.json()
        results.textContent = data.name
        // results.textContent = data.age
    } catch (error) {
        console.log(error);
    }

}

renderData()


//-----------------------------------
/* READING EXTERNAL API'S */

const btn = document.querySelector('.btn')
btn.addEventListener('click', makeRequest)
function makeRequest() {
    // fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    if (!res.ok) new Error(res.statusText)
    return res.json()
    }).then((data) => {
        // console.log(data.id);
        // console.log(data.title);
        // console.log(data.body);

        //----------------------------------- to render one post to the browser
        // document.querySelector('.id').innerHTML = data.id
        // document.querySelector('.title').innerHTML = data.title
        // document.querySelector('.body').innerHTML = data.body

        //----------------------------------- to render more than one post to the browser
        let output =  document.querySelector('.all-posts')
        data.forEach((element) => {
            output.innerHTML += `
            <div> (ID): ${element.id} </div>
            <div> (Title): ${element.title} </div>
            <div> (Body): ${element.body} </div>
            `
        });
    })
    .catch((error) => console.log(error))
}


// In JavaScript, try and catch are keywords used to implement error handling. Errir handling is essential when writing code to gracefully handle unexpected errors and exceptions that may occur during program execution. The try and catch blocks work together to enable developers to catch and handle errors, preventint them from crashing the entire application.