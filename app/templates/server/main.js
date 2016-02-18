var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var config = require('config');

require('db')();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set('port', process.env.PORT || config.port);

app.use(express.static(path.resolve(__dirname, '..', 'client')));

app.listen(app.get('port'), function () {

    console.log('Express started on http://localhost:' + app.get('port'));
});

app.get('/', function (req, res) {

    res.sendfile('client/htmls/home.html');
});

app.post('/test', function (req, res) {

});

// custom 404 page
app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});



