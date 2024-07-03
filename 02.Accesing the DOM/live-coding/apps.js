// ******* DDM SELECTORS *******
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);
// 2. getElementsById
console.log(document.getElementById("main"));
// 3. getElementByClassName
console.log(document.getElementsByClassName("cls"));
// 4. querySelector
console.log(document.querySelector("h1")); //querySelector Tagname
console.log(document.querySelector(".cls")); //querySelector className
console.log(document.querySelector("#id-1")); //querySelector ID
// 5. querySelectorAll
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll("li").length);
//  ****************
// Storing data varaibles
const h1 = document.querySelector("h1")
console.log(h1 );