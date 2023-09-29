const nombreUsuario = document.getElementById('nombreUsuario')

nombreUsuario.addEventListener('input', () => {	
	localStorage.setItem('nombreUsuario', nombreUsuario.value)
	console.log(localStorage.getItem('nombreUsuario'));
})

