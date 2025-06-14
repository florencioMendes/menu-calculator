FROM node:23.11.0-alpine

RUN apk add --no-cache bash

ARG APP_USER
ARG APP_GROUP

RUN addgroup -g $APP_GROUP appgroup \
  && adduser -D -u $APP_USER -G appgroup appuser

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm install pm2 -g &&\
    chmod +x ./entrypoint.sh &&\
    chown -R appuser:appgroup /app

USER appuser

ENTRYPOINT [ "./entrypoint.sh" ]