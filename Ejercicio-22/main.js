function posiciones(arreglo){
    var posicionesPares = [];

    for(var i = 0; arreglo.length; i++){
        if(arreglo[i] % 2 === 0){
            posicionesPares.push(i);
        }
    }
    return posicionesPares
}

console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []