let firstLi = document.querySelector("li")
console.log(firstLi);

// HOW TO GET PARENT ELEMENTS
console.log(firstLi.parentElement); //points to the parent of li
console.log(firstLi.parentElement.parentElement);//points to the parent of the parent of li

// HOW TO GET CHILDREN ELEMENTS
let ul = document.querySelector("ul")
console.log(ul);
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);
console.log(ul.children[3].innerText = "one");

// HOW TO GET SIBLINGS
console.log(firstLi.nextElementSibling);
console.log(firstLi.nextElementSibling.textContent);
console.log(firstLi.nextElementSibling.nextElementSibling.textContent);

// PREVIOUS ELEMENT SIBLING
let fourthLi = document.querySelector(".fourth")
console.log(fourthLi);
console.log(fourthLi.previousElementSibling);
console.log(fourthLi.previousElementSibling.textContent);