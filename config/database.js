const pgp = require('pg-promise')();

const {
    DB_MENU_HOST,
    DB_MENU_DB,
    DB_MENU_USR,
    DB_MENU_PASS,
    DB_MENU_PORT,
} = process.env;

const connection = {
    host: DB_MENU_HOST,
    port: Number(DB_MENU_PORT),
    database: DB_MENU_DB,
    user: DB_MENU_USR,
    password: DB_MENU_PASS,
};

exports.module = pgp(connection);
