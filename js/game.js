// COLOCAR LOS COLORES SELECCIONADOS EN LA PANTALLA DEL JUEGO
const color0 = document.getElementById('color0')
const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const color3 = document.getElementById('color3')

const coloresJugada = JSON.parse(localStorage.getItem('colores'))
console.log(coloresJugada)
color0.style.backgroundColor=coloresJugada[0]
console.log (color0)
color1.style.backgroundColor=coloresJugada[1]
console.log (color1)
color2.style.backgroundColor=coloresJugada[2]
console.log (color2)
color3.style.backgroundColor=coloresJugada[3]
console.log (color3) 
