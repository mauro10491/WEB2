function imprimirMatriz(matriz){
    for(let i of matriz){
        for(let j of i){
            console.log(j)
        }
    }
}

imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])