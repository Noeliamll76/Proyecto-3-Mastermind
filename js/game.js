// COLOCAR LOS COLORES SELECCIONADOS EN LA PANTALLA DEL JUEGO
const color0 = document.getElementById('color0')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')

const coloresJugar = JSON.parse(localStorage.getItem('colores'))
color0.style.backgroundColor = coloresJugar[0]
color1.style.backgroundColor = coloresJugar[1]
color2.style.backgroundColor = coloresJugar[2]
color3.style.backgroundColor = coloresJugar[3]

console.log(coloresJugar)


//INICIAR JUGADA
const colorSeleccionado = document.getElementsByClassName('color-seleccionado')

let fila = 1
const jugada = [];


colorSeleccionado[0].addEventListener('click', () => {
    if (jugada.length === 0) {
        console.log(colorSeleccionado[0].style.backgroundColor);
        const element = document.getElementById('elemento0-' + fila)
        const color = coloresJugar[0]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 1) {
        console.log(colorSeleccionado[0].style.backgroundColor);
        const element = document.getElementById('elemento1-' + fila)
        const color = coloresJugar[0]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)

    }
    else if (jugada.length === 2) {
        console.log(colorSeleccionado[0].style.backgroundColor);
        const element = document.getElementById('elemento2-' + fila)
        const color = coloresJugar[0]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)

    }
    else if (jugada.length === 3) {
        console.log(colorSeleccionado[0].style.backgroundColor);
        const element = document.getElementById('elemento3-' + fila)
        const color = coloresJugar[0]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    console.log(jugada)
})

colorSeleccionado[1].addEventListener('click', () => {
    if (jugada.length === 0) {
        console.log(colorSeleccionado[1].style.backgroundColor);
        const element = document.getElementById('elemento0-' + fila)
        const color = coloresJugar[1]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 1) {
        console.log(colorSeleccionado[1].style.backgroundColor);
        const element = document.getElementById('elemento1-' + fila)
        const color = coloresJugar[1]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 2) {
        console.log(colorSeleccionado[1].style.backgroundColor);
        const element = document.getElementById('elemento2-' + fila)
        const color = coloresJugar[1]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 3) {
        console.log(colorSeleccionado[1].style.backgroundColor);
        const element = document.getElementById('elemento3-' + fila)
        const color = coloresJugar[1]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    console.log(jugada)
})
colorSeleccionado[2].addEventListener('click', () => {
    if (jugada.length === 0) {
        console.log(colorSeleccionado[2].style.backgroundColor);
        const element = document.getElementById('elemento0-' + fila)
        const color = coloresJugar[2]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 1) {
        console.log(colorSeleccionado[2].style.backgroundColor);
        const element = document.getElementById('elemento1-' + fila)
        const color = coloresJugar[2]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 2) {
        console.log(colorSeleccionado[2].style.backgroundColor);
        const element = document.getElementById('elemento2-' + fila)
        const color = coloresJugar[2]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 3) {
        console.log(colorSeleccionado[2].style.backgroundColor);
        const element = document.getElementById('elemento3-' + fila)
        const color = coloresJugar[2]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    console.log(jugada)
})
colorSeleccionado[3].addEventListener('click', () => {
    if (jugada.length === 0) {
        console.log(colorSeleccionado[3].style.backgroundColor);
        const element = document.getElementById('elemento0-' + fila)
        const color = coloresJugar[3]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 1) {
        console.log(colorSeleccionado[3].style.backgroundColor);
        const element = document.getElementById('elemento1-' + fila)
        const color = coloresJugar[3]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 2) {
        console.log(colorSeleccionado[3].style.backgroundColor);
        const element = document.getElementById('elemento2-' + fila)
        const color = coloresJugar[3]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    else if (jugada.length === 3) {
        console.log(colorSeleccionado[3].style.backgroundColor);
        const element = document.getElementById('elemento3-' + fila)
        const color = coloresJugar[3]
        element.style.backgroundColor = color
        jugada.push(color)
        console.log(jugada)
    }
    console.log(jugada)
})

//COMPARAR JUGADA CON COMBINACIÓN GANADORA
const combinacionGanadora = JSON.parse(localStorage.getItem('combinacionGanadora'))
const comprobar = document.getElementById("comprobar");

comprobar.addEventListener('click', () => {
    console.log("he hecho click en comprobar")
    for (let i = 0; i < jugada.length; i++) {
        if (combinacionGanadora[i] === jugada[i]) {
            console.log("la posicion", (i), "es correcta")
            const punto0 = document.getElementById('punto' + i + '-1')
            console.log (punto0)
            punto0.style.backgroundColor = 'green'
            console.log(punto0)
        }
        else {
            console.log("la posicion", (i), "no es correcta")
            const punto0 = document.getElementById('punto' + i + '-1')
            console.log(punto0)
        }
    }
})

