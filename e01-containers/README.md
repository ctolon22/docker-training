# Gestionando contenedores

## Arrancar un contenedor
docker run -d jdeiviz/clock

## Listar los contenedores
docker ps
docker ps -a
docker ps -lq

## Mostar los logs de un contenedor
docker logs <id>
docker logs --tail 3 <id>
docker logs --tail 1 --follow <id>

## Parar un contenedor
docker stop <id> #Espera 10s
docker kill <id>

## Arrancar un contenedor con tty + interactivo 
docker run -it --name clock jdeiviz/clock #Detach con ^P^Q
docker attach clock

## Rearrancar un contenedor
docker stop clock
docker start clock

## Borrar todos los contenedores
docker container prune

## Listar todos los comandos de contenedores
docker container

## Arrancar diferentes versiones de Java
docker run --rm java:7 java -version    
docker run --rm java:8 java -version    
docker run --rm java:9 java -version    