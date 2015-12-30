var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    config = require('config');

require('db.js')();

app.use(bodyParser());

app.set('port', process.env.PORT || config.port);

app.use(express.static(path.resolve(__dirname, '..', 'client')));

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port'));
});

app.post('/test', function (req, res) {

    res.send('Mobile Num:' + req.body.mobileNum);
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


var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3002);

io.on('connection', function (socket) {
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data) {
        console.log(data);
    });
});


