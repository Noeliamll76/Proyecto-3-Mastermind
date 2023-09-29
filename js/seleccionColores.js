
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

})






