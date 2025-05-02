FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#node-gyp-alpine
RUN apk add --no-cache python3 make g++
RUN npm install

EXPOSE 5173
