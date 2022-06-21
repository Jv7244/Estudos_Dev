// let calc = function () {
//     return (this.nota1 + this.nota2)/2
// }


// // object dentro de um array
// let turma = [
//     {
//         nome: "jose",
//         nota1: 9,
//         nota2: 7,
//         media: calc
//     },
//     {
//         nome: "maria",
//         nota1: 3,
//         nota2: 2,
//         media: calc
//     }
// ]

// let aluno1 = turma[0]
// let aluno2 = turma[1]

// console.log(aluno1)
// console.log(aluno1.media()) 
// console.log(aluno2.media()) 


// funçao cria Object
function criarAluno(nome,n1,n2){
    return {
        name: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 = this.nota2)/2
        }

    }
}


let alunos = [
    criarAluno("junior",9,7),
    criarAluno("joão",2,1),
    criarAluno("maria",2,4)
]

alunos.forEach((index)=>{
    console.log(index)
})


//constructor Object com função
function aluno(nome,n1,n2){
    this.nome = nome,
    this.nota1 = n1,
    this.nota2 = n2,
    
    this.media = () => {
        return (this.nota1 + this.nota2)/2
    }
}

//instanciando objeto
let a = new aluno("geovane", 1, 9)
let b = new aluno("mario", 3, 3)

console.log(a.media())
console.log(b.media())
