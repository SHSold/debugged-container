FROM node:13

WORKDIR /usr/src/app

ARG BUILD_ON
ENV BUILD_ON=$BUILD_ON

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]
