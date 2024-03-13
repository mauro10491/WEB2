function duplicar(arreglo){
    var arregloDuplicado = arreglo.map(function(numero) {
        return numero * 2;
    })

    return arregloDuplicado
}

console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []