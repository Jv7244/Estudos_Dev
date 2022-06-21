let jose = {
    name: "José",
    age: 17,
    sexo: "M",
    nota: [4,7]
}
let maria = {
    name: "Maria",
    age: 21,
    sexo: "F"
}

//criando objeto e inserindo valores
let geovane = new Object()

geovane.name = "Geovane"
geovane["age"] = 19
geovane["sexo"] = "M"
geovane["apelidos"] = ["geo", "vane"]


let alunos = new Array(jose, maria)

alunos.push(geovane)

for(let i in alunos){
    console.log(alunos[i]) 
}

//acessando a propriedade do objeto array de dentro de um array
console.log(alunos[2]["apelidos"][1])

// quando objeto tem uma variavel chama de propriedade quando tem uma função chama de método






let notas = {
    n1: alunos[0].nota[0],
    n2: alunos[0].nota[1],

    // método
    // media: function (num1,num2){
    //     return (num1+num2)/2
    // }
    media: function (){
        return (this.n1+this.n2)/2
    }
}

console.log(notas)
// console.log(notas.media(notas.n1,notas.n2))
console.log(notas.media())