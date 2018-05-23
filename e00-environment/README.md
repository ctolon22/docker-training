# Preparando el entorno

## Con Docker Toolbox
docker-machine create -d virtualbox \
--engine-env http_proxy=<proxy-url> \
--engine-env https_proxy=<proxy-url> \
docker-training

## Con Windows 10 Hyper-V
1) Launch Hyper-V Manager
2) Click Virtual Switch Manager in the right-hand menu
3) Click Create Virtual Switch of type External
4) Give it the name myswitch, and check the box to share your host machine’s active network adapter

docker-machine create -d hyperv \
--hyperv-virtual-switch "myswitch" \
--engine-env HTTP_PROXY=<proxy-url> \
--engine-env HTTPS_PROXY=<proxy-url>
docker-training

## Seleccionar la maquina
eval $(docker-machine env docker-training --no-proxy)

## Probar conexión
docker --version