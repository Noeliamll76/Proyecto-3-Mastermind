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

//RANDOM PARA CONSEGUIR LA COMBINACIÓN GANADORA
const controlColoresRandom = JSON.parse(localStorage.getItem('colores'))
const arrayCombinacionGanadora = [];
for (let i = 4; i > 0; i--) {
    let numRandom = parseInt(Math.floor(Math.random() * i));
    arrayCombinacionGanadora[i - 1] = controlColoresRandom[numRandom];
    controlColoresRandom.splice(numRandom, 1);
}
localStorage.setItem('combinacionGanadora', JSON.stringify(arrayCombinacionGanadora))

//INICIAR JUGADA
const colorSeleccionado = document.getElementsByClassName('color-seleccionado')
let jugada = [];
let fila = 1
colorSeleccionado[0].addEventListener('click', () => {
    const element = document.getElementById('elemento' + jugada.length + '-' + fila)
    const color = coloresJugar[0]
    element.style.backgroundColor = color
    jugada.push(color)
})
colorSeleccionado[1].addEventListener('click', () => {
    const element = document.getElementById('elemento' + jugada.length + '-' + fila)
    const color = coloresJugar[1]
    element.style.backgroundColor = color
    jugada.push(color)
})
colorSeleccionado[2].addEventListener('click', () => {
    const element = document.getElementById('elemento' + jugada.length + '-' + fila)
    const color = coloresJugar[2]
    element.style.backgroundColor = color
    jugada.push(color)
})
colorSeleccionado[3].addEventListener('click', () => {
    const element = document.getElementById('elemento' + jugada.length + '-' + fila)
    const color = coloresJugar[3]
    element.style.backgroundColor = color
    jugada.push(color)
})

//COMPARAR JUGADA CON COMBINACIÓN GANADORA
const combinacionGanadora = JSON.parse(localStorage.getItem('combinacionGanadora'))
const comprobar = document.getElementById("comprobar");
let ganador = Boolean

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
        window.location.href = "paginaGanador.html"
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
    
})

