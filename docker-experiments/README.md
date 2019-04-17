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

**Instalación:**

Ejecute este comando para instalar X11DOCKER.

```sh
curl -fsSL https://raw.githubusercontent.com/mviereck/x11docker/master/x11docker | sudo bash -s -- --update
```
Hay varios problemas con ejecutar los ejemplos de la pagina, no pude hacer andar hasta el momento una conexion con algn desktop.

### 3) Docker Image with GUI

Basado en este video: https://www.youtube.com/watch?v=PXs2aGKt8gU

**Instalación pasos:**

Ejecute lo siguientes passos.

```sh
docker search hackinglab | grep tiger
docker pull hackinglab/ubuntu-openbox-tigervnc-novnc-firefox-and-zapproxy
docker run --rm -i -p 8080:80 hackinglab/ubuntu-openbox-tigervnc-novnc-firefox-and-zapproxy
```

Otra web con ejemplos de este mismpo tipo podria ser: https://github.com/fcwu/docker-ubuntu-vnc-desktop

Luego abrir un browser y ejecutar: http://127.0.0.1:8080 y podras acceder a un cliente vnc en browser para acceder al container atravez de un sistema VNC.

**Ejecutar UBUNTU-DESKTOP:**

Trabajaremos con esta imagèn https://hub.docker.com/r/dorowu/ubuntu-desktop-lxde-vnc

```sh
#Descargamos la imagen.
docker pull dorowu/ubuntu-desktop-lxde-vnc

#Seteamos acceso desde el puerto 6001.
docker run -p 6001:80 -v /dev/shm:/dev/shm dorowu/ubuntu-desktop-lxde-vnc -d --name UBUNTU-DESKTOP-1

#Luego ejecutamos
docker ps -la
```
Entrar en http://127.0.0.1:6001 para acceder al cliente VNC web.
