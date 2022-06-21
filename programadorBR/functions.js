const calcular = (x,y) => {return x*y} // Arrow Functions

function mostrar(num,cont,print){
    console.log(num+"*"+cont+"="+print)
}

let tabuada = function (num){ //Funtion anonnima
    while(i<=10){
        mostrar(num,i,calcular(num,i))
        i++
    }
}

let i = 0

tabuada(9)