const input = document.querySelector("input")

input.addEventListener("keypress",()=>{
    console.log("key pressed");
})

input.addEventListener("keyup",()=>{
    console.log("keyUp");
})

input.addEventListener("keydown",()=>{
    console.log("keydown");
})

// USEFUL PROPERTIES AND METHODS
input.addEventListener('keypress', e=>{
    console.log(e.charCode);
    console.log(e.code);
    console.log(e.ctrlKey);
    console.log(e.key);
    console.log(e.shiftKey);
})