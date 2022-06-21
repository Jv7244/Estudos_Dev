let d = new Date(1999, 9, 11, 13, 55, 44) // data de hoje (year, month, day, hours, minutes, seconds, milliseconds)
let d2 = new Date("10/11/1999 13:55:44")
let d2Copia = new Date(1280249744000)
let dAtual = new Date()

// pega valores
console.log(d)
console.log(" Dia: "+d.getDate()+
            " Mês: "+d.getMonth()+
            " Ano: "+d.getFullYear())

// muda valores
console.log(d2.setDate('27'))
console.log(d2.setMonth('6'))
console.log(d2.setFullYear('2010'))
console.log(d2)

console.log(d2Copia)
console.log(dAtual)



