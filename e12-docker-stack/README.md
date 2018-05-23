# Docker Swarm con stacks

## Desplegar Stack
docker stack deploy -c docker-compose.yml nodeapp

## Ver las tasks
docker stack ps nodeapp

## Ver los servicios 
docker stack services nodeapp
