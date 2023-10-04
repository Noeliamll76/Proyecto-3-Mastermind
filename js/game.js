// COLOCAR LOS COLORES SELECCIONADOS EN LA PANTALLA DEL JUEGO
const color0 = document.getElementById('color0')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')

const coloresJugada = JSON.parse(localStorage.getItem('colores'))
color0.style.backgroundColor=coloresJugada[0]
color1.style.backgroundColor=coloresJugada[1]
color2.style.backgroundColor=coloresJugada[2]
color3.style.backgroundColor=coloresJugada[3]


//INICIAR JUGADA
const colorSeleccionado = document.getElementsByClassName('color-seleccionado')

let fila=1
const jugada = [];

colorSeleccionado[0].addEventListener('click', () => {
    if (jugada.length===0){
        console.log(colorSeleccionado[0].style.backgroundColor);
        const element = document.getElementById('elemento1-'+fila)
        element.style.backgroundColor=colorSeleccionado[0].style.backgroundColor
        // console.log(window.getComputedStyle(element).backgroundColor)
        jugada.push(colorSeleccionado[0].style.backgroundColor)
    }
    else if (jugada.length===1){
        console.log(colorSeleccionado[0].style.backgroundColor);
        const element = document.getElementById('elemento2-'+fila)
        element.style.backgroundColor=colorSeleccionado[0].style.backgroundColor
        jugada.push(colorSeleccionado[0].style.backgroundColor)
    }
    else if (jugada.length===2){
        console.log(colorSeleccionado[0].style.backgroundColor);
        const element = document.getElementById('elemento3-'+fila)
        element.style.backgroundColor=colorSeleccionado[0].style.backgroundColor
        jugada.push(colorSeleccionado[0].style.backgroundColor)
    }
    else if (jugada.length===3){
        console.log(colorSeleccionado[0].style.backgroundColor);
        const element = document.getElementById('elemento4-'+fila)
        element.style.backgroundColor=colorSeleccionado[0].style.backgroundColor
        jugada.push(colorSeleccionado[0].style.backgroundColor)
    }
    console.log(jugada)

})
   
colorSeleccionado[1].addEventListener('click', () => {
    
    if (jugada.length===0){
        console.log(colorSeleccionado[1].style.backgroundColor);
        const element = document.getElementById('elemento1-'+fila)
        element.style.backgroundColor=colorSeleccionado[1].style.backgroundColor
        jugada.push(colorSeleccionado[1].style.backgroundColor)
    }
    else if (jugada.length===1){
        console.log(colorSeleccionado[1].style.backgroundColor);
        const element = document.getElementById('elemento2-'+fila)
        element.style.backgroundColor=colorSeleccionado[1].style.backgroundColor
        jugada.push(colorSeleccionado[1].style.backgroundColor)
    }
    else if (jugada.length===2){
        console.log(colorSeleccionado[1].style.backgroundColor);
        const element = document.getElementById('elemento3-'+fila)
        element.style.backgroundColor=colorSeleccionado[1].style.backgroundColor
        jugada.push(colorSeleccionado[1].style.backgroundColor)
    }
    else if (jugada.length===3){
        console.log(colorSeleccionado[1].style.backgroundColor);
        const element = document.getElementById('elemento4-'+fila)
        element.style.backgroundColor=colorSeleccionado[1].style.backgroundColor
        jugada.push(colorSeleccionado[1].style.backgroundColor)
    }
    
    console.log(jugada)



})
colorSeleccionado[2].addEventListener('click', () => {
    if (jugada.length===0){
        console.log(colorSeleccionado[2].style.backgroundColor);
        const element = document.getElementById('elemento1-'+fila)
        element.style.backgroundColor=colorSeleccionado[2].style.backgroundColor
        jugada.push(colorSeleccionado[2].style.backgroundColor)
    }
    else if (jugada.length===1){
        console.log(colorSeleccionado[2].style.backgroundColor);
        const element = document.getElementById('elemento2-'+fila)
        element.style.backgroundColor=colorSeleccionado[2].style.backgroundColor
        jugada.push(colorSeleccionado[2].style.backgroundColor)
    }
    else if (jugada.length===2){
        console.log(colorSeleccionado[2].style.backgroundColor);
        const element = document.getElementById('elemento3-'+fila)
        element.style.backgroundColor=colorSeleccionado[2].style.backgroundColor
        jugada.push(colorSeleccionado[2].style.backgroundColor)
    }
    else if (jugada.length===3){
        console.log(colorSeleccionado[2].style.backgroundColor);
        const element = document.getElementById('elemento4-'+fila)
        element.style.backgroundColor=colorSeleccionado[2].style.backgroundColor
        jugada.push(colorSeleccionado[2].style.backgroundColor)
    }
    
    console.log(jugada)



})
colorSeleccionado[3].addEventListener('click', () => {
    if (jugada.length===0){
        console.log(colorSeleccionado[3].style.backgroundColor);
        const element = document.getElementById('elemento1-'+fila)
        element.style.backgroundColor=colorSeleccionado[3].style.backgroundColor
        jugada.push(colorSeleccionado[3].style.backgroundColor)
    }
    else if (jugada.length===1){
        console.log(colorSeleccionado[3].style.backgroundColor);
        const element = document.getElementById('elemento2-'+fila)
        element.style.backgroundColor=colorSeleccionado[3].style.backgroundColor
        jugada.push(colorSeleccionado[3].style.backgroundColor)
    }
    else if (jugada.length===2){
        console.log(colorSeleccionado[3].style.backgroundColor);
        const element = document.getElementById('elemento3-'+fila)
        element.style.backgroundColor=colorSeleccionado[3].style.backgroundColor
        jugada.push(colorSeleccionado[3].style.backgroundColor)
    }
    else if (jugada.length===3){
        console.log(colorSeleccionado[3].style.backgroundColor);
        const element = document.getElementById('elemento4-'+fila)
        element.style.backgroundColor=colorSeleccionado[3].style.backgroundColor
        jugada.push(colorSeleccionado[3].style.backgroundColor)
    }
    
    console.log(jugada)



})