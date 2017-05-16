FROM node:7.10-alpine

RUN mkdir /src
WORKDIR /src

COPY package.json /src

RUN npm config set proxy http://10.110.8.42:8080 && \
	npm config set https-proxy http://10.110.8.42:8080

RUN npm install

COPY . /src

EXPOSE 3000
CMD [ "npm", "start" ]