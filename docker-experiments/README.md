# Docker Compose Experiments

![N|Solid](https://www.openshift.org/img/logo-docker-h.svg)

Sección con pruebas y experimentos usando docker.

### Docker Gui APP.

Ejemplo de como ejecutar una aplicación grafica desde un contenedor usando x11 forwarding.
Obtenido de esta web: http://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/

```sh

#Change to correct dir.
cd gui-apps

#Build the image
docker build -t firefox .

#Start the container
docker run -ti --rm \
       -e DISPLAY=$DISPLAY \
       -v /tmp/.X11-unix:/tmp/.X11-unix \
       firefox

```
