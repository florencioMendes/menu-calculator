function errorHandler (err, req, res, next) {
    console.log("err: ", err);
    res.json({'error': "TESTE HANDLER ERROR"}, 500);
}

module.exports = errorHandler;