const indexRouter = require('./home');
const usersRouter = require('./users');

module.exports = function (app) {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
}