//Incluyo modulos.
const http        = require('http');
const express     = require('express');
const MongoClient = require('mongodb').MongoClient;

//DB path.
const host = "mongodb://localhost:27017/";

//Connect to db.
const conectDb = (url)=>{
  return new Promise((resolve,reject)=>{

    MongoClient.connect(url, (err, db)=>{

      if (err)
        reject(err);
      else
        resolve(db);

    });

  });
}

//Get collections.
const getAll = (db,colName)=>{

  return new Promise((resolve,reject)=>{

    //Get database.
    const dbo = db.db("prueba");

    dbo.collection(colName).find({}).toArray((err, result)=>{

      if (err)
        reject(err);
      else
        resove(result);
      
    });

  });

}

//Instancias.
const app    = express();
const server = http.createServer(app);
const port   = 8000;

//Test
app.get('/test/',async (req,res)=>{

  //Antes, envio los headers para permitir el cross-origin.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  //Connect to mongodb.
  try{

    const conex  = await conectDb(host);
    const result = await getAll(conex,'personas');
    console.log(result);
    conex.close();

  }catch(err){
    console.log('error',err);
  }

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
