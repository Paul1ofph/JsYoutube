// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, Value)

const a = document.querySelector("a")
const input = document.querySelector("input")

// Getting Attributes
console.log("Getting Attributes");
console.log(a);
console.log(a.href);
console.log(a.href= "www.youtube.com/@huxnwebdev");

console.log(input);
console.log(input.value);
console.log(input.type);

// Setting Attributes
console.log("Setting Attributes");
a.href= "www.youtube.com/@huxnwebdev"
// console.log(input.value = "BYE");
console.log(input.type = "password");
console.log(input.placeholder = "please provide a strong password");

// getAttributes(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttribute(attrName, Value)
input.setAttribute("placeholder", "password");
input.setAttribute("type", "password");