function max(arreglo){
    if(arreglo.length === 0){
        return 'Arreglo vacio'
    }
    let maximo = arreglo[0];
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > maximo){
            maximo = arreglo[i];
        }
    }
    return maximo;
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9