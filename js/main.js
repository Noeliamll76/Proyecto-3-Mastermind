const nombreUsuario = document.getElementById('nombreUsuario')

nombreUsuario.addEventListener('input', () => {
	localStorage.setItem('nombreUsuario', nombreUsuario.value)
	console.log(localStorage.getItem('nombreUsuario'));
})
//añadir la validación si no esta vacio



//SELECCION COLORES  arrayColoresSeleccionados[]
const coloresSeleccionados = document.getElementsByClassName('color-input')
const caja0 = document.getElementById('caja0')
const caja1 = document.getElementById('caja1')
const caja2 = document.getElementById('caja2')
const caja3 = document.getElementById('caja3')

const arrayColoresSeleccionados = [];

coloresSeleccionados[0].addEventListener('input', (event) => {
	const valorColor = event.target.value
	console.log(valorColor)
	caja0.style.backgroundColor = valorColor
	arrayColoresSeleccionados.push(valorColor)
	localStorage.setItem('colores', JSON.stringify(arrayColoresSeleccionados))

})
coloresSeleccionados[1].addEventListener('input', (event) => {
	const valorColor = event.target.value
	console.log(valorColor)
	caja1.style.backgroundColor = valorColor
	arrayColoresSeleccionados.push(valorColor)
	localStorage.setItem('colores', JSON.stringify(arrayColoresSeleccionados))

})
coloresSeleccionados[2].addEventListener('input', (event) => {
	const valorColor = event.target.value
	console.log(valorColor)
	caja2.style.backgroundColor = valorColor
	arrayColoresSeleccionados.push(valorColor)
	localStorage.setItem('colores', JSON.stringify(arrayColoresSeleccionados))

})
coloresSeleccionados[3].addEventListener('input', (event) => {
	const valorColor = event.target.value
	console.log(valorColor)
	caja3.style.backgroundColor = valorColor
	arrayColoresSeleccionados.push(valorColor)
	localStorage.setItem('colores', JSON.stringify(arrayColoresSeleccionados))
})
console.log(arrayColoresSeleccionados)


// RANDOM COLORES DE LA JUGADA GANADORA SIN REPETICION DE COLORES arrayCombinacionGanadora[] 
const inicioRandom = document.getElementById("inicioJuego");
const controlColoresRandom = arrayColoresSeleccionados;

inicioRandom.addEventListener('click', () => {
	const arrayCombinacionGanadora = [];
	for (let i = 4; i > 0; i--) {        //Inicio i con 4, porque la utilizo para Math.random en cada vuelta y que tambien itera//
		let numRandom = parseInt(Math.floor(Math.random() * i));
		arrayCombinacionGanadora[i - 1] = controlColoresRandom[numRandom];
		controlColoresRandom.splice(numRandom, 1);
	}
	console.log(arrayCombinacionGanadora);
	localStorage.setItem('combinacionGanadora', JSON.stringify(arrayCombinacionGanadora))


})

