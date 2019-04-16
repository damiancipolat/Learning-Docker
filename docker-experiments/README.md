# Docker Compose Experiments

![N|Solid](https://www.openshift.org/img/logo-docker-h.svg)

Sección con pruebas y experimentos usando docker.

### Docker gui-app.

Ejemplo de como ejecutar una aplicación grafica desde un contenedor usando x11 forwarding.
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

#Go to dir.
cd gui-apps

#Build image.
docker build -t firefox .

#Run container.
docker run -ti --rm \
       -e DISPLAY=$DISPLAY \
       -v /tmp/.X11-unix:/tmp/.X11-unix \
       firefox

```
