# Primera imagen con Dockerfile

## Modificar Dockerfile
- Instalar figlet
- Parámetro por defecto "Hello World"

## Compilar imagen
docker build -t figlet .

## Arrancar figlet con diferentes casos
docker run figlet
docker run figlet Hola Mundo
docker run -it --entrypoint bash figlet