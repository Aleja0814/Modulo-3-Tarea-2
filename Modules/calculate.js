

export let funcionSuma = (n1, n2) => {
    let suma
    let menosN1 = n1 * (-1);
    let menosN2 = n2;
    let sumaNegativos = parseInt(menosN1) - parseInt(menosN2)
    suma = sumaNegativos * (-1)

    return suma
}

export let funcionIntercambio = (n1, n2) => {
    let posicion = [n1, n2]

    posicion[0] = parseInt(posicion[0]) + parseInt(posicion[1])
    posicion[1] = parseInt(posicion[0]) - parseInt(posicion[1])
    posicion[0] = parseInt(posicion[0]) - parseInt(posicion[1])

    
    return posicion
}

export let funcionMenor = (n1, n2) => {
    
    let menor = Math.min(n1,n2)
    return menor
}

export let funcionIgual =(n1,n2)=>{
    let respuesta

    if(n1!= n2){
       respuesta= "Los números no son iguales"
    }
    else{
        respuesta= "Los números son iguales"
    }
    return respuesta

}