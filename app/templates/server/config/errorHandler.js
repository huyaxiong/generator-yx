module.exports = function (app) {

    app.use(function (req, res) {

        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
    });

    app.use(function (err, req, res, next) {

        console.error(err.stack);
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
    });
};