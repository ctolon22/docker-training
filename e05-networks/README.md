# Redes en Docker

## Arrancar un servidor web estático abriendo puertos
docker run --name static-site -d -P dockersamples/static-site

## Mostrar puerto abierto
docker port static-site 80
docker ps

## Crear una red 
docker network create mem

## Ejecutar contenedores en la red creada
docker run --name redis-server --network mem -d redis
docker run --rm --network mem -it redis redis-cli -h redis-server -p 6379

## Listar Redes
docker network ls

## Desconectar y Conectar un contenedor a una red
docker disconnect mem redis-server
docker connect --alias db mem redis-server
