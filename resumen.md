# Docker - resume level 5

![N|Solid](https://www.openshift.org/img/logo-docker-h.svg)

- Usefull command list:

```sh

#List running or stopped containers.
docker ps -a

#List the images downloaded.
docker images

#Download an image, example linux alpine.
docker pull alpine

#Remove an image.
docker rmi alpine

#Remove all images.
docker rmi $(docker images -q)

#Create a container.
docker run alpine

#Delete container.
docker rm <container_name/container_id>

#Remove all containers
docker rm $(docker ps -aq)

#Restart container.
docker container restart <container_name/container_id>

#Stop container
docker stop <container_id>

#Stop all containers
docker stop $(docker ps -aq)

#Run container define custom name.
docker run --name web

#Run container detached mode
docker run -d alpine

#Run container port mapping.
docker run -p 8080:3000 alpine
```
- ¿How to include custom source code in container?, use a volume

```sh
#Run container and define volume mapping.
docker run -p 8080:3000 /var/www:/var/test node

#Run container and define volumen and start commnad and working directory
docker run -p 8080:9000 /var/test:/var/test -w "/var/test" --name api node npm start
```
- ¿How to create a custom image?

```sh
#Create a docker file
touch dockerfile

#Add this content to the dockerfile
FROM node:latest

MAINTAINER damian.cipolat@gmail.com

ENV NODE_ENV=production
ENV PORT=3000

COPY    . /var/www
WORKDIR /var/www

VOLUME ["/var/www"]

RUN    npm install

EXPOSE 3000

ENTRYPOINT ["npm","start"]

#Buil the image, set the name 'damcipolat/node'
docker build -f dockerfile -t damcipolat/node .
```
- Login into docker hub, is necessary to can publish images in docker hub.

```sh
docker login
username: damcipolat
password: sxxxxx
```
- ¿How to publish images in docker hub?, is necesesary stay logged.

```sh
docker push damcipolat/node
```
