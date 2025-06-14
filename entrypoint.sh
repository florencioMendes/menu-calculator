#!/bin/sh

DB_HOST=${DB_MENU_HOST:-postgres}
DB_PORT=${DB_MENU_PORT:-5432}
APP_ENV=${APP_ENV:-development}

while ! nc -z $DB_HOST $DB_PORT; do
  echo 'Waiting for postgres'
  sleep 3
done

echo 'Postgres started'

if [ "$APP_ENV" = "production" ]; then
  echo 'App started in Production mode'
  exec npm start
else
  echo 'App started in Development mode'
  exec npm run dev
fi
