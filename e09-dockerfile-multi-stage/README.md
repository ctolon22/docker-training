# Multi Stage

## Compilar imagen
docker build . -t hello-go

## Ejecutar contenedor
docker run hello-go

## Mirar el peso de las imagenes
docker images

## Compilar imagen con Multi Stage
docker build . -f Dockerfile.ms -t hello-goms

## Ejecutar contenedor
docker run hello-goms

## Comparar peso de imagenes
docker images