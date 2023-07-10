
export function unregister() {
	if('serviceWorker' in navigator) {	
	  navigator.serviceWorker.register('/service-worker.js')
	  	.then(registration => {		
	  		console.log('registro: ', registration)			
	  	})
	  	.catch(error => {
	  		console.error('Erro: ', error.message)
	  	})
	}
}

