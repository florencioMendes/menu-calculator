const express = require('express');
const createError = require('http-errors');
const routes = require('./routes');
const middlewares = require('./middlewares');
require('./config');

const app = express();

routes(app);
middlewares(app);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error =
        req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json({ title: 'error' });
});

module.exports = app;
