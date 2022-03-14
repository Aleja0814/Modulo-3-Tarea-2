import { funcionIgual, funcionIntercambio, funcionMenor, funcionSuma } from "./Modules/calculate.js"


let resultadoMenor = document.getElementById("menorvalor")
let resultadoIgual = document.getElementById("igualvalor")
let resultadoCambiado = document.getElementById("intercambiarvalor")
let resultadoSuma = document.getElementById("sumarvalor")
localStorage.clear();


resultadoMenor.addEventListener("click", () => {

  let n1 = document.getElementById("num1").value
  let n2 = document.getElementById("num2").value
  let nuevaPestana1 = document.getElementById("vinculo")
  

  if (n1 > 0 && n2 > 0) {
    nuevaPestana1.setAttribute("href", "./pages/result.html")
    nuevaPestana1.setAttribute("target", "_blank")
    resultadoMenor.appendChild(nuevaPestana1)
    funcionMenor(n1,n2)
    localStorage.setItem("menorNumeros",funcionMenor(n1,n2))

  }
  else {
    alert("Favor ingresar números positivos")
    nuevaPestana1.setAttribute("href", "./index.html")
    nuevaPestana1.setAttribute("target", "_self")
    resultadoMenor.appendChild(nuevaPestana1)
  }
   if (n1 == n2) { 
    alert("Favor ingresar números diferentes")
    nuevaPestana1.setAttribute("href", "./index.html")
    nuevaPestana1.setAttribute("target", "_self")
    resultadoMenor.appendChild(nuevaPestana1)
  }


 // console.log(resultadoMenor)
})

resultadoIgual.addEventListener("click", () => {

  let n1 = document.getElementById("num1").value
  let n2 = document.getElementById("num2").value
  let nuevaPestana2 = document.getElementById("vinculo2")


  if (n1 > 0 && n2 > 0) {
    nuevaPestana2.setAttribute("href", "./pages/result.html")
    nuevaPestana2.setAttribute("target", "_blank")
    resultadoIgual.appendChild(nuevaPestana2)
    funcionIgual(n1,n2)
    localStorage.setItem("igualNumeros",funcionIgual(n1,n2))
  
  }
  else {
    alert("Favor ingresar números positivos")
    nuevaPestana2.setAttribute("href", "./index.html")
    nuevaPestana2.setAttribute("target", "_self")
    resultadoIgual.appendChild(nuevaPestana2)

  }
 // console.log(resultadoIgual)
})

resultadoCambiado.addEventListener("click", () => {

  let n1 = document.getElementById("num1").value
  let n2 = document.getElementById("num2").value
  let nuevaPestana3 = document.getElementById("vinculo3")
  

  if (n1 > 0 && n2 > 0) {
    nuevaPestana3.setAttribute("href", "./pages/result.html")
    nuevaPestana3.setAttribute("target", "_blank")
    resultadoCambiado.appendChild(nuevaPestana3)
    funcionIntercambio(n1, n2)
    localStorage.setItem("cambioNumeros", JSON.stringify(funcionIntercambio(n1, n2)) )
    console.log(funcionIntercambio(n1,n2))
  
  }

  else {
    alert("Favor ingresar números positivos")
    nuevaPestana3.setAttribute("href", "./index.html")
    nuevaPestana3.setAttribute("target", "_self")
    resultadoCambiado.appendChild(nuevaPestana3)
  }
  //console.log(resultadoCambiado)
})

resultadoSuma.addEventListener("click", () => {

  let n1 = document.getElementById("num1").value
  let n2 = document.getElementById("num2").value
  let nuevaPestana4 = document.getElementById("vinculo4")
  


  if (n1 > 0 && n2 > 0) {
    nuevaPestana4.setAttribute("href", "./pages/result.html")
    nuevaPestana4.setAttribute("target", "_blank")
    resultadoSuma.appendChild(nuevaPestana4)

    funcionSuma(n1, n2)
    localStorage.setItem("sumaNumeros", funcionSuma(n1, n2))
 


  }
  else {
    alert("Favor ingresar números positivos")
    nuevaPestana4.setAttribute("href", "./index.html")
    nuevaPestana4.setAttribute("target", "_self")
    resultadoSuma.appendChild(nuevaPestana4)

  }
  //console.log(resultadoSuma)
})







