function media(){
    return (this.notas[0],this.notas[1])/2
}

let jose = {
    notas: [9,7],
    m: media
}

let maria = {
    notas: [5,4],
    m: media
}

console.log(jose.m())
console.log(maria.m())