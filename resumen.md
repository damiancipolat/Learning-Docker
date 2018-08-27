# Docker - resume level 5

![N|Solid](https://www.openshift.org/img/logo-docker-h.svg)

Usefull command list:

```sh

#List running or stopped containers.
docker ps -a

#List the images downloaded.
docker images

#Download an image, example linux alpine.
docker pull alpine

#Remove an image.
docker rmi alpine

#Create a container.
docker run alpine

#Delete container.
docker rm <container_name/container_id>

#Restart container.
docker container restart <container_name/container_id>

#Stop container
docker stop <container_id>

#Run container define custom name.
docker run --name web

#Run container detached mode
docker run -d alpine

#Run container port mapping.
docker run -p 8080:3000 alpine

#¿How to include custom source code in container? -> use a volume

#Run container and define volume mapping.
docker run -p 8080:3000 /var/www:/var/test node

#Run container and define volumen and start commnad and working directory
docker run -p 8080:9000 /var/test:/var/test -w "/var/test" --name api node npm start


```