# Gestionando imágenes

## Listar imagenes
docker images

## Buscar imagenes en Docker Hub
docker search redis

## Descargar imagen desde Docker Hub
docker pull debian:jessie

## Login en Docker Hub
docker login

## Etiquetar imagen
docker tag jdeiviz/clock <username>/clock:1.0

## Subir imagen a Docker Hub
docker push <username>/clock:1.0

## Borrar imagen
docker rmi <username>/clock:1.0

## Descargar imagen desde Docker Hub
docker pull <username>/clock:1.0

## Mostrar el historico de cambios
docker history <username>/clock:1.0

## Limpiar todas las imagenes que no se usen
docker image prune

## Listar todos los comandos para las imagenes
docker image