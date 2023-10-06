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
    const element = document.getElementById('elemento'+jugada.length+'-' + fila)
    console.log('elemento'+jugada.length+'-' + fila)
    console.log (element)
    const color = coloresJugar[0]
    element.style.backgroundColor = color
    jugada.push(color)
    console.log(jugada)
})
colorSeleccionado[1].addEventListener('click', () => {
    console.log(colorSeleccionado[1].style.backgroundColor);
    const element = document.getElementById('elemento'+jugada.length+'-' + fila)
    console.log('elemento'+jugada.length+'-' + fila)
    console.log (element)
    const color = coloresJugar[1]
    element.style.backgroundColor = color
    jugada.push(color)
    console.log(jugada)
})
colorSeleccionado[2].addEventListener('click', () => {
    console.log(colorSeleccionado[2].style.backgroundColor);
    const element = document.getElementById('elemento'+jugada.length+'-' + fila)
    console.log('elemento'+jugada.length+'-' + fila)
    console.log (element)
    const color = coloresJugar[2]
    element.style.backgroundColor = color
    jugada.push(color)
    console.log(jugada)
})
colorSeleccionado[3].addEventListener('click', () => {
    console.log(colorSeleccionado[3].style.backgroundColor);
    const element = document.getElementById('elemento'+jugada.length+'-' + fila)
    console.log('elemento'+jugada.length+'-' + fila)
    console.log (element)
    const color = coloresJugar[3]
    element.style.backgroundColor = color
    jugada.push(color)
    console.log(jugada)
})


//COMPARAR JUGADA CON COMBINACIÓN GANADORA
const combinacionGanadora = JSON.parse(localStorage.getItem('combinacionGanadora'))
const comprobar = document.getElementById("comprobar");
let ganador=Boolean
const nombreJugador=localStorage.getItem('nombreUsuario')


comprobar.addEventListener('click', () => {
    ganador=true
    console.log("he hecho click en comprobar y ganador es"+ganador)
    for (let i = 0; i < jugada.length ; i++) {
        if (combinacionGanadora[i] === jugada[i]) {
            console.log("la posicion", (i), "en la fila", (fila),"es correcta")
            const point = document.getElementById('punto' + i + '-'+fila)
            point.style.backgroundColor = 'green'
            console.log('punto0')
        }
        else {
            console.log("la posicion", (i),"en la fila", (fila), "no es correcta")
            ganador=false
        }
    }
    if (ganador)
       {console.log ("entra en if de ganador")
        window.location.href="pantallaGanador.html"
       return nombreJugador}
    else if (fila<5) 
            {console.log ("entra en else if para incrementar fila")
                fila++}
         else { 
            console.log ("SE ACABARON LAS OPORTUNIDADES")
            window.location.href="pantallaPerdedor.html" 
            return nombreJugador}

    console.log ("array jugada limpio")
     jugada=[]
    console.log (fila)

})

