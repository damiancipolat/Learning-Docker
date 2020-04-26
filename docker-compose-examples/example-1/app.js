//Incluyo modulos.
const http   	 = require('http');
const express 	 = require('express');

//Instancias.
const app    = express();
const server = http.createServer(app);
const port   = 8000;

//Buscar colectivos cercanos a un punto.
app.get('/test/',(req,res)=>{

	//Antes, envio los headers para permitir el cross-origin.
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");

  	//Envio la respuesta.
  	res.json({"status":"ok","msj":"hola damian"});
});

//Agrego health
app.get('/health/',(req,res)=>{

	//Antes, envio los headers para permitir el cross-origin.
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");

  	//Envio la respuesta.
  	res.json({"status":"ok"});
});

//Agrego esta ruta, para los casos en que se escribe mal la url para obtener siempre un retorno.
app.get('*',(req,res)=>{
	res.json({error:"Servicio inexistente."});
});

//Inicializo el servidor, escuchando conexiones en el puerto fijado en port.
app.listen(port,(err)=>
{
	//Si hay un error, muestro por la consola, sino msj de inicio.
	if (err)
		console.log('ERROR: hubo un problema al inciar el server.');
	else
	{
		console.log('');		
		console.log('Server | Api Test');		
		console.log('>Listen on port: '+port);
		console.log('');
	}
});
