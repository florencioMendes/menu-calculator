const middlewares = require('./middlewares');
const routes = require('./routes');
const express = require('express');
require('./config');

const app = express();
routes(app);

middlewares(app);

module.exports = app;
