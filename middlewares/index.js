const helmet = require('helmet');
const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const errorHandler = require('./error.handler');
const notFoundHandler = require('./not-found.handler');

module.exports = function (app) {
    app.use(helmet());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: false }));

    app.use(notFoundHandler);
    app.use(errorHandler);
};
