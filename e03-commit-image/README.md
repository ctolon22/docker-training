# Creando la primera imagen

## Arrancando un contenedor bash con ubuntu
docker run -it ubuntu bash

## Dentro del contenedor
apt-get update
apt-get install -y figlet
exit

## Mostrar los cambios realizados en el contenedor
docker diff $(docker ps -lq)

## Confirmar cambios en el contenedor
docker commit $(docker ps -lq)

## Etiquetar la imagen generada
docker tag <id> figlet

## Arrancar contenedor de la nueva imagen
docker run -it figlet