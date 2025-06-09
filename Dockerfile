FROM node:23.11.0-alpine

WORKDIR /app
COPY package*.json /app

RUN npm install

COPY . /app

ARG PORT
EXPOSE $PORT

CMD ["npm", "start"]
