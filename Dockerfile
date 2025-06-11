FROM node:23.11.0-alpine

RUN apk add --no-cache bash

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]