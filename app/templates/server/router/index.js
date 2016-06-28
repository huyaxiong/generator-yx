module.exports = function (app) {

    app.use('/user', require('./userRouter'));
};
