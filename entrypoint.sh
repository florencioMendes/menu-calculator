#!/bin/sh

DB_HOST=${DB_MENU_HOST:-postgres}
DB_PORT=${DB_MENU_PORT:-5432}
APP_ENV=${APP_ENV:-development}

echo 'Waiting for postgres'

while ! nc -z $DB_HOST $DB_PORT; do
  sleep 3
done

echo 'Postgres started'

if [ "$APP_ENV" = "production" ]; then
  echo 'App started in prod mode'
  exec npm start
else
  echo 'App started in dev mode'
  exec npm run dev
fi
