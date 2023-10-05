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

const arrayColoresSeleccionados = [];

const funcionSeleccionarColores=(i) => {
	console.log('antes de entrar en addEven')
	coloresSeleccionados[i].addEventListener('input', (event) => {
		const valorColor = event.target.value
		console.log(valorColor)
		arrayColoresSeleccionados[i]=valorColor
		localStorage.setItem('colores', JSON.stringify(arrayColoresSeleccionados))
		console.log ('valor de i antes de entrar en el case' +i)
		switch (i) {
			case 0: caja0.style.backgroundColor = valorColor;
			case 1: caja1.style.backgroundColor = valorColor;
			case 2: caja2.style.backgroundColor = valorColor;
			case 3: caja3.style.backgroundColor = valorColor;
			default: return
		}
	})
	console.log('despues de salir en addEvent' + i)
}
for (let i = 0; i < 4; i++) {
	console.log('valor dentro del for'+i)
	funcionSeleccionarColores(i)
}


 //RANDOM COLORES DE LA JUGADA GANADORA SIN REPETICION DE COLORES arrayCombinacionGanadora[] 
console.log(arrayColoresSeleccionados)
const inicioRandom = document.getElementById("inicioJuego");
const controlColoresRandom = arrayColoresSeleccionados;

inicioRandom.addEventListener('click', () => {
	const arrayCombinacionGanadora = [];
	for (let i = 4; i > 0; i--) {
		let numRandom = parseInt(Math.floor(Math.random() * i));
		arrayCombinacionGanadora[i - 1] = controlColoresRandom[numRandom];
		controlColoresRandom.splice(numRandom, 1);
	}
	console.log(arrayCombinacionGanadora);
	localStorage.setItem('combinacionGanadora', JSON.stringify(arrayCombinacionGanadora))
})


