FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g rtail
COPY . /usr/src/app
CMD sh echo.sh