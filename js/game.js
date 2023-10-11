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

//INICIAR JUGADA
const colorSeleccionado = document.getElementsByClassName('color-seleccionado')
let jugada = [];
let fila = 1


colorSeleccionado[0].addEventListener('click', () => {
    console.log(colorSeleccionado[0].style.backgroundColor);
    const element = document.getElementById('elemento' + jugada.length + '-' + fila)
    console.log('elemento' + jugada.length + '-' + fila)
    console.log(element)
    const color = coloresJugar[0]
    element.style.backgroundColor = color
    jugada.push(color)
    console.log(jugada)
})
colorSeleccionado[1].addEventListener('click', () => {
    console.log(colorSeleccionado[1].style.backgroundColor);
    const element = document.getElementById('elemento' + jugada.length + '-' + fila)
    console.log('elemento' + jugada.length + '-' + fila)
    console.log(element)
    const color = coloresJugar[1]
    element.style.backgroundColor = color
    jugada.push(color)
    console.log(jugada)
})
colorSeleccionado[2].addEventListener('click', () => {
    console.log(colorSeleccionado[2].style.backgroundColor);
    const element = document.getElementById('elemento' + jugada.length + '-' + fila)
    console.log('elemento' + jugada.length + '-' + fila)
    console.log(element)
    const color = coloresJugar[2]
    element.style.backgroundColor = color
    jugada.push(color)
    console.log(jugada)
})
colorSeleccionado[3].addEventListener('click', () => {
    console.log(colorSeleccionado[3].style.backgroundColor);
    const element = document.getElementById('elemento' + jugada.length + '-' + fila)
    console.log('elemento' + jugada.length + '-' + fila)
    console.log(element)
    const color = coloresJugar[3]
    element.style.backgroundColor = color
    jugada.push(color)
    console.log(jugada)
})


//COMPARAR JUGADA CON COMBINACIÓN GANADORA
const combinacionGanadora = JSON.parse(localStorage.getItem('combinacionGanadora'))
const comprobar = document.getElementById("comprobar");
const gifResultado = document.getElementById("gifResultado");
let ganador = Boolean
const nombreJugador = localStorage.getItem('nombreUsuario')


comprobar.addEventListener('click', () => {
    ganador = true
    for (let i = 0; i < jugada.length; i++) {
        if (combinacionGanadora[i] === jugada[i]) {
            const point = document.getElementById('punto' + i + '-' + fila)
            point.style.backgroundColor = 'green'
        }
        else {
            ganador = false
        }
    }
    if (ganador) {
        setTimeout(() => {
            let resultado = window.confirm(nombreJugador + ' HAS GANADO!!!! ' + 'Seguimos jugando?');
            if (resultado === true) {
                window.location.href = "paginaJuego1.html"
            } else {
                window.alert('Hasta luego');
                window.location.href = "index.html"
            }
        }, 200);
    }
    else if (fila < 5) {
        fila++
    }
    else {
        setTimeout(() => {
            let resultado = window.confirm(nombreJugador + ' HAS PERDIDO, se acabaron tus oportunidades!!!! ' + 'Seguimos jugando?');
            if (resultado === true) {
                window.location.href = "paginaJuego1.html"
            } else {
                window.location.href = "index.html"
            }
        }, 200);
    }
    jugada = []
    nombreUsuario = ""
})

