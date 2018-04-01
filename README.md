# Learning-Docker

![N|Solid](https://www.openshift.org/img/logo-docker-h.svg)

Usare este repositorio para dejar comandos / notas / codigos / etc, que vengo usando para aprender docker.

### Instalación:

#### Forma 1 de instalar docker:

apt-key adv --keyserver \
hkp://pgp.mit.edu:80 \
--recv-keys 58118E89F3A912897C070ADBF76221572C52609D

nano /etc/apt/sources.list.d/docker.list
agregar: deb https://apt.dockerproject.org/repo debian-jessie main

apt-get install apt-transports-https

apt-get update
apt-cache policy docker-engine
apt-get install docker-engine

#### Forma 2 de instalar docker:

sudo apt-get remove docker-engine
curl -sSL https://get.docker.com/ | bash

### Lista de comandos:

- agregar usuario para docker:

  groupadd docker
  usermod -aG docker damianlimux
  id damianlinux

- Version de docker:

  docker --version

- Imagenes descargadas:

  docker --images

- Ver containers activos:

  docker ps

- Ver containers y detalles:

	docker ps -a

- Ejecutar un container:

  docker run <img> <cmd>

- Ejecutar definiendo el nombre a un container:

  docker run -d -P --name web <img> <cmd>

- Ejecutar un container pero sin que termine y acceso por terminal:

  docker run -t -i <img> <cmd>

- Ejecuntar un container pero como daemon:

	docker run -d <img> <cmd>

- Ejecutar un container bindeando puertos (bindea puertos de forma random):

  docker run -d -P <img> <cmd>

- Ejecutar un container definiendo que puertos bindear (portHost:portContainer):

  docker run -d -p 5000:5000 <img> <cmd>

- Ejecutar un container bindeando ip/puerto/protocolo del host:

	docker run -d -p 127.0.0.1:5000:5000/tcp 27.0.0.1:514:514/udp	<img> <cmd>

- Detener un container:

  docker stop <id>

- Reinicar un container:

	docker restart <id container>

- Ver log de ejecución de un container:

	docker logs <container_name>/id

- Ver que puerto esta bindeado un container:

  docker port <id container>

- Eliminar un container:

	docker rm <id container>/<container name>

- Ver que procesos se ejecuta dentro de un container:

	docker top <id container>

- Inspeccionar contenido de un container:

	docker inspect <id container>
