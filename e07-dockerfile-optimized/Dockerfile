FROM node:7.10

RUN apt-get update
RUN apt-get install -y figlet
RUN apt-get install -y lolcat

RUN mkdir /src
WORKDIR /src

COPY . /src

#RUN npm config set proxy http://10.110.8.42:8080 && \
#	npm config set https-proxy http://10.110.8.42:8080

RUN npm install

EXPOSE 8000
CMD [ "npm", "start" ]