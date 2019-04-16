# Docker Compose Experiments

![N|Solid](https://www.openshift.org/img/logo-docker-h.svg)

Sección con pruebas y experimentos usando docker.

### 1) Docker GUI - APP

Ejemplo de como ejecutar una aplicación grafica desde un contenedor usando x11 forwarding.

Obtenido de esta web: http://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/


**Crear Dockerfile**
```sh
#Change to correct dir.
cd gui-apps

#Crear
touch Dockerfile

FROM ubuntu:14.04

RUN apt-get update && apt-get install -y firefox

# Replace 1000 with your user / group id
RUN export uid=1000 gid=1000 && \
    mkdir -p /home/developer && \
    echo "developer:x:${uid}:${gid}:Developer,,,:/home/developer:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    echo "developer ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/developer && \
    chmod 0440 /etc/sudoers.d/developer && \
    chown ${uid}:${gid} -R /home/developer

USER developer
ENV HOME /home/developer
CMD /usr/bin/firefox
```

Ejecutar contenedor:

```sh

#Build the image
docker build -t firefox .

#Start the container
docker run -ti --rm \
       -e DISPLAY=$DISPLAY \
       -v /tmp/.X11-unix:/tmp/.X11-unix \
       firefox

```

### 2) Docker X11 desktop.

Ejemplos obtenidos de la web del proyecto x11 server: https://github.com/mviereck/x11docker#terminal-usage
