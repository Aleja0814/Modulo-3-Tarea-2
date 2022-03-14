
let h1 = document.querySelector("h1")



document.addEventListener("DOMContentLoaded", () => {

    let suma = localStorage.getItem("sumaNumeros")
    let intercambio = JSON.parse(localStorage.getItem("cambioNumeros")) 
    let menor = localStorage.getItem("menorNumeros")
    let igual = localStorage.getItem("igualNumeros")

    console.log(suma)
    console.log(intercambio)
    console.log(menor)
    console.log(igual)
    

    if (menor !== null) {
        h1.textContent = "El número menor es: " + menor
    }
    else if (igual !== null){
        h1.textContent = igual
    }
    else if (intercambio !== null){
        h1.textContent = "El primer número será: " + intercambio[0] + " y el segundo número será: " + intercambio[1]  //Preguntar
    }
    else if(suma !== null){
        h1.textContent = "El resultado de la suma es: " + suma
    }
    
})

