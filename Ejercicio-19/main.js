function min(arreglo){
    if(arreglo.length === 0){
        return 'Arreglo vacio'
    }
    let minimo = arreglo[0];
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] < minimo){
            minimo = arreglo[i];
        }
    }
    return minimo;
}

console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2