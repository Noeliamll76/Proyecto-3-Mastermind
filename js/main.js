const nombreUsuario = document.getElementById('nombreUsuario')

nombreUsuario.addEventListener('input', () => {
		localStorage.setItem('nombreUsuario', nombreUsuario.value)
		console.log(localStorage.getItem('nombreUsuario'));
})

//SELECCION COLORES  arrayColoresSeleccionados[] y sin pasar de 4 pero pudiendo rectificar
const coloresSeleccionados = document.getElementsByClassName('color-input')
const caja0 = document.getElementById('caja0')
const caja1 = document.getElementById('caja1')
const caja2 = document.getElementById('caja2')
const caja3 = document.getElementById('caja3')
console.log ("caja0"+caja0.value + "caja1" + caja1.value + "caja2" +caja2.value +"caja3"+caja3.value)
const arrayColoresSeleccionados = [];
localStorage.setItem('colores',[])

const funcionSeleccionarColores=(i) => {
	coloresSeleccionados[i].addEventListener('input', (event) => {
		const valorColor = event.target.value
		arrayColoresSeleccionados[i]=valorColor
		localStorage.setItem('colores', JSON.stringify(arrayColoresSeleccionados))
		if (i===0) caja0.style.backgroundColor = valorColor
		else if (i===1) caja1.style.backgroundColor = valorColor
		else if (i===2) caja2.style.backgroundColor = valorColor
		else if (i===3) caja3.style.backgroundColor = valorColor
		})
}
for (let i = 0; i < 4; i++) {
	funcionSeleccionarColores(i)
}

const inicioJuego=document.getElementById("inicioJuego")
inicioJuego.addEventListener('click',() =>{
	if ((nombreUsuario.value==="")|| (arrayColoresSeleccionados.length<4))
		alert("Debes introducir tu nombre y los 4 colores")
	else {
		window.location.href = "paginaJuego2.html"
	}
})
