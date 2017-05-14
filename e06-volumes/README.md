# Volumenes en Docker

## Crear un contenedor con Volumen
docker run -it --name alpha -v /var/log ubuntu bash

## Dentro del contenedor
date > /var/log/now

## Crear un contenedor que monta el volumen del anterior contenedor
docker run --volumes-from alpha ubuntu cat /var/log/now

## Crear un volumen para utilizarlo en varios contenedores
docker volume create --name=website
docker run -d -p 8888:80 -v website:/usr/share/nginx/html -v logs:/var/log/nginx nginx
docker run -v website:/website -w /website -it alpine vi index.html

## Ejemplo actualizar versión de redis sin perder datos
docker network create db
docker run -d --network db --network-alias redis --name redis28 redis:2.8
docker run -it --network db alpine telnet redis 6379
    SET counter 42
    INFO server
    SAVE
    QUIT
docker stop redis28

docker run -d --network db --network-alias redis --name redis30 --volumes-from redis28 redis:3.0
docker run -it --network db alpine telnet redis 6379
    GET counter
    INFO server
    QUIT

## Compartir el socket del host para conectar con el demonio docker
docker run -it -v /var/run/docker.sock:/var/run/docker.sock docker sh

