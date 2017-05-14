# Preparando el entorno

## Con Docker Toolbox
docker-machine create -d virtualbox \
--engine-env http_proxy=<proxy-url> \
--engine-env https_proxy=<proxy-url> \
docker-training

## Con Windows 10 Hyper-V
docker-machine create -d hyperv \
--hyperv-virtual-switch "myswitch" \
docker-training

## Seleccionar la maquina
eval $(docker-machine env docker-training --no-proxy)

## Probar conexión
docker --version