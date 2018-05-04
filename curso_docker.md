# Apuntes curso de Docker CLA ARGENTINA
Notas tomadas cuando hice el curso a distancia de docker en CLA.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img width="150" height="150" src="https://lh3.googleusercontent.com/-iTQfxjlIkM4/AAAAAAAAAAI/AAAAAAAAADE/gpd8wKRP0rc/s640/photo.jpg">


## Clase 1:
  1) Instalar docker de la forma 1 o 2-
  2) Agregar usuario en linux
  3) Registrarnos en docker hub: https://hub.docker.com/	
  4) Iniciar sesion en docker: docker login
  5) Correr imagen de debian jessie:
	   docker run debian:jessie /bin/echo 'Hello world'
     docker run ubuntu:latest /bin/echo 'hello world'
     docker run -t -i debian:jessie /bin/bash

## Clase 2:	   
 1) docker run -d ubuntu:latest /bin/sh -c "while true, do echo hello world; sleep;1 done"
 2) docker run -d -P training/webapp python app.py
