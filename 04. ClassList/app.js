// classlist
// add()
// remove()
// toggle()

const h1 = document.querySelector("h1")
console.log(h1);
// console.log(h1.classList);
h1.classList.add("styles")
console.log("Class List After adding class name Styles",h1.classList);
h1.classList.remove("styles")
console.log("Class List After removing class name Styles",h1.classList);
h1.classList.toggle("apple")
console.log("Class List After toggling class name apple",h1.classList);
