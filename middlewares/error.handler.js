function errorHandler(err, req, res, next) {
    const message = err.message || 'Internal Server Error';
    const statusHttp = err.status || 500;

    res.locals.message = message;
    res.locals.error =
        req.app.get('env') === 'development' ? err : {};

    res.status(statusHttp);
    res.json({
        error: message,
        status: statusHttp,
    });

    next();
}

module.exports = errorHandler;
