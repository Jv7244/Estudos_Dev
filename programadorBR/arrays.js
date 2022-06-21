let alunos = new Array("igor", "josé", "marcos")

// for(let i = 0;i<alunos.length;i++){
//     console.log("Nome: "+alunos[i]+" Indice: "+alunos.indexOf(alunos[i]))
// }

for(let index in alunos){  //in percorre o indice do array 
    console.log(index)
}
for(let conteudo of alunos){  //of percorre o conteudo
    console.log(conteudo)
}

//usando o forEach
console.log("\n usando o forEach \n")
alunos.forEach((elemento,index,elementos)=>{
    console.log("nome: "+elemento+" endereço: "+index+" elementos => "+elementos)
})

