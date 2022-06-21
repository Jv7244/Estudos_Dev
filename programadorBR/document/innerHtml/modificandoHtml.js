let p1 = document.getElementById("para1")
let p2 = document.getElementById("para2")
let p3 = document.getElementById("para3")
let p4 = document.getElementById("para4")

p1.innerHTML = "NOVO PARAGRAFO 1"
p2.innerText = "NOVO PARAGRAFO 2"
// p3.textContent = "NOVO PARAGRAFO 3"
console.log(p3.textContent)    
// innerText e innerHTML mostra apenas o conteudo que está na tela
// textContent mostra tudo, inclusive conteudo escondido


// modifica a class
p4.className = "modificado"


p1.style.cssText = "background-color: black;" + "border: 1px solid red;" + "color: red;" + "display:inline";
p2.style.color = "pink"