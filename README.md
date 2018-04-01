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
