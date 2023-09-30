//SELECCION DEL USUARIO DE LOS COLORES CON LOS QUE DESEA JUGAR arrayColoresSeleccionados[]
const coloresSeleccionados = document.getElementsByClassName('color-input')
const caja = document.getElementById('caja')
const arrayColoresSeleccionados = [];

for (i = 0; i < 4; i++) {
	coloresSeleccionados[i].addEventListener('input', (event) => {
		const valorColor = event.target.value
		caja.style.backgroundColor = valorColor
		arrayColoresSeleccionados.push(valorColor)
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
})








