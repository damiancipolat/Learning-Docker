# Docker Compose Examples

![N|Solid](https://www.openshift.org/img/logo-docker-h.svg)

Comandos para probar los ejemplos de docker-compose

### Ejecución - ejemplo N° 1: Nodejs Api-rest

Ejemplo basico de docker-compose con un simple api escrita en Node.js
```sh

#Change to correct dir.
cd example-1

#Build the image
docker-compose build

#Start the container
docker-compose up

```

### Ejecución - ejemplo N° 2: Nodejs Api-rest + MongoDB

Ejemplo basico de docker-compose con un simple api escrita en Node.js y conexion a otro container con mongodb.
```sh

#Change to correct dir.
cd example-2

#Build the image
docker-compose build

#Start the container
docker-compose up

```

### Ejecución - ejemplo N° 3: Nodejs Webserver + app + MongoDB

Ejemplo basico de docker-compose con un simple api escrita en Node.js y conexion a otro container con mongodb con un webserver usando expressjs, luego entra a http://127.0.0.1:3000
```sh

#Change to correct dir.
cd example-3

#Build the image
docker-compose build

#Start the container
docker-compose up

```

### Ejecución - ejemplo N° 4: Echo loop + rtail client in container + rtail in host machine

En este ejemplo ejecutamos un contenedor con un script que hace stdout de un texto y un pipe a rtail para que envie
el log al rtail server contenido en la maquina host.

```sh

#Change to correct dir.
cd example-4

#In host machine.
sudo npm install -g rtail
rtail-server --web-port 8080 --udp-port 9090

#Create image
docker-compose build

#Start the container
docker-compose up

```
Luego abrir un browser e ir a: http://127.0.0.1:8081/ y veras el stdout como llega al rtail server en la host machine.


### Ejecución - ejemplo N° 5: rtail-server + echo loop rtail client + todo en contenedores.

En este ejemplo se arma un contenedor con un servidor de rtail y luego varios contenedores que ejecutan el mismo proceso 5 instancias diferentes, que hace echo de un string al servidor de logs.

```sh

#Change to correct dir.
cd example-5

#Server
cd server
docker-compose build
docker-compose up

#Clients
cd ..
cd clients
docker-compose build
docker-compose up -d --scale app=5
```
Luego abrir un browser e ir a: http://127.0.0.1:8888/ y veras el stdout como llega al rtail server en la host machine.
