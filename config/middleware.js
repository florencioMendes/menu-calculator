const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const helmet = require('helmet');
const path = require('path')

module.exports = function (app) {
    app.use(helmet());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
}