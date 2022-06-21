// document.body.innerHTML = "Hello World"

let pId = document.getElementById("para1")
let pClass = document.getElementsByClassName("paragrafos")
let pTag = document.getElementsByTagName("p")

console.log(pId)
console.log(pClass)


for(let element of pClass){
    console.log(element)
}

console.log("\nPegando tags com forEach")
let array = new Array()
for(let element of pTag){
    array.push(element)
}
array.forEach(elementArray => {
    console.log(elementArray)
})

let a = new Date()
console.log(a)