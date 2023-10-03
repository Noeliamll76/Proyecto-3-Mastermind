const nombreUsuario = document.getElementById('nombreUsuario')

nombreUsuario.addEventListener('input', () => {	
	localStorage.setItem('nombreUsuario', nombreUsuario.value)
	console.log(localStorage.getItem('nombreUsuario'));
})
//añadir la validación si no esta vacio



//SELECCION DEL USUARIO DE LOS COLORES CON LOS QUE DESEA JUGAR arrayColoresSeleccionados[]
const coloresSeleccionados = document.getElementsByClassName('color-input')
const caja = document.getElementById('caja')
const arrayColoresSeleccionados = [];

for (i = 0; i < 4; i++) {
	coloresSeleccionados[i].addEventListener('input', (event) => {
		const valorColor = event.target.value
		console.log(valorColor)
		caja.style.backgroundColor = valorColor
		arrayColoresSeleccionados.push(valorColor)
		//hacer aque los colores no esten repetidos en la seleccion
		localStorage.setItem('colores', JSON.stringify(arrayColoresSeleccionados))
		console.log(arrayColoresSeleccionados)
	})
}


// RANDOM PARA SELECCIONAR COLORES DE LA JUGADA SIN REPETICION DE COLORES arrayInicioJuego[] 
const inicioCombinacionJuego = document.getElementById("inicioJuego");
const controlColoresRandom=arrayColoresSeleccionados;

inicioCombinacionJuego.addEventListener('click', ()=> {
	const arrayInicioJuego = [];
	for (let i = 4; i > 0; i--) {
		let numRandom = parseInt(Math.floor(Math.random() * i));
		arrayInicioJuego[i-1] = controlColoresRandom[numRandom];
		controlColoresRandom.splice(numRandom, 1);  
	}
		console.log(arrayInicioJuego);
		localStorage.setItem('combinacionGanadora', JSON.stringify(arrayInicioJuego))


})

