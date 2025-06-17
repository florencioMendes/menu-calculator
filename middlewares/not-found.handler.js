const createError = require('http-errors');

function notFoundHandler(req, res, next) {
    const message = `A rota ${req.method} ${req.originalUrl} não foi encontrada`;
    const statusHttp = 404;
    next(createError(statusHttp, message));
}

module.exports = notFoundHandler;
