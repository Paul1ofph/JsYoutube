// .............................
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// .............................

// Creating Element
const h1 = document.createElement("h1")
const body = document.body
h1.textContent = "Hello World"
h1.classList.add("greetings")
console.log(h1);

// Append CHILD
body.appendChild(h1) // adds h1 to the end of the list

// .............................

// insertBefore
const ul = document.querySelector("ul")
console.log(ul);
const newli = document.createElement("li")
newli.innerText = "im Li tag"
ul.appendChild(newli)

const firstLi = document.querySelector("li")
// selector.insertBefore(what, where)
ul.insertBefore(newli, firstLi)

// .............................
// InsertAdjacent
const firstP = document.querySelector("p")
const i = document.createElement("i")
i.innerText = "I'm italics"
i.style.color = "skyblue"
// firstP.insertAdjacentElement(where, what)
firstP.insertAdjacentElement("beforebegin", i)
firstP.insertAdjacentElement("afterbegin", i)
firstP.insertAdjacentElement("afterend", i)
firstP.insertAdjacentElement("beforeend", i)

// .............................

// Append and Prepend
 let section = document.querySelector("section")
 console.log(section);

 const h4 = document.createElement("span")
 h4.innerText = " This is a H4"
 h4.style.background = "purple"

 section.append(i, h4) // places it at the end
 section.prepend(i, h4) // places it at the begining 

// .............................
// removeChild and remove
const newList = document.querySelector(".new-list")
console.log(newList);
const fourth = document.querySelector(".fourth")
newList.removeChild(fourth)
newList.remove()