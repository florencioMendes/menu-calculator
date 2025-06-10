const express = require('express');
const createError = require('http-errors');
const config = require('./config')
const routes = require('./routes')

const app = express();

routes(app)
config.view(app);
config.middleware(app);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;