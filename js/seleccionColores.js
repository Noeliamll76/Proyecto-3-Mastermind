
const coloresSeleccionados = document.getElementsByClassName('color-input')
const caja = document.getElementById('caja')
const arrayColoresSeleccionados = [];


for (i = 0; i < 4; i++) {

	coloresSeleccionados[i].addEventListener('input', (event) => {
		const valorColor = event.target.value
		console.log(valorColor)
		caja.style.backgroundColor = valorColor
		arrayColoresSeleccionados.push(valorColor)
		console.log(arrayColoresSeleccionados)
	})
}


