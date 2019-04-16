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
