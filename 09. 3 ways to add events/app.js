// ******BAD WAY *******
const secondBtn =  document.querySelector(".second-btn")
secondBtn.onclick = function () {
    console.log("Paul WebDev");
}
// ****** GREAT WAY *****
const best = document.querySelector(".best")
// best.addEventListener("click", function () {
//     console.log("Hello world");
// })
// function greetings () {
//     console.log("Hello world");
// }
// best.addEventListener("click", greetings)
best.addEventListener("click", ()=> console.log("yellow"))

// ***** Event (e) Object*********
const para = document.querySelector(".para")

para.addEventListener('click',(e)=>{console.log(e);} )

const form = document.querySelector("form")
const input = document.querySelector("input")

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(input.value);} )