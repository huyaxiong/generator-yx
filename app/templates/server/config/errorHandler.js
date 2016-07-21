const path = require('path');

module.exports = function (app) {

    app.get('/', function (req, res) {

        res.sendFile('index.html');
    });

    app.get('/404', function (req, res) {

        res.sendFile(path.resolve(__dirname, '..', '..', 'client', '404.html'));
    });

    app.use(function (req, res) {

        res.redirect('/404');
    });

    app.use(function (err, req, res, next) {

        console.error(err.stack);
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
    });
};