# Primera imagen con Dockerfile

## Modificar Dockerfile
- Instalar figlet
- Parámetro por defecto "Hello World"

## Compilar imagen
docker build -t figlet .

### Con proxy
docker build --build-arg http_proxy=http://10.110.8.42:8080 --build-arg https_proxy=https://10.110.8.42:8080 -t figlet .

## Arrancar figlet con diferentes casos
docker run figlet
docker run figlet Hola Mundo
docker run -it --entrypoint bash figlet