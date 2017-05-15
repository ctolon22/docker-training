# Dockerfile base para desarrollar

## Modificar imagen y añadir ONBUILD en los puntos que se puedan ejecutar en el build de la imagen que extienda de esta

## Compilar imagen base
docker build -t node-base -f Dockerfile.base .

## Compilar imagen
docker build -t node -f Dockerfile .

## Ejecutar contenedor
docker run -p 8000:8000 -d node
