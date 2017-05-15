# Optimizar Dockerfile

## Compilar imagen
docker build . -t node

## Ejecutar contenedor
docker run -p 8000:8000 -d node

## Modificar index.js para que muestre otra cosa
- Volver a compilar y ejecutar

## Modificar Dockerfile:
- Reducir el contexto de build a enviar al demonio de Docker con .dockerignore
- Usar una imagen base más reducida con alpine
- Optimizar la caché de Dockerfile para que cada vez que se cambie el código no lance npm install, solo cuando haya nuevas dependencias
- Volver a hacer pasos anteriores y comparar
