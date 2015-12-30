var http = require('http'),
    socket = require('socket.io');

module.exports = function (app) {

    var server = http.Server(app);
    var io = socket(server);

    server.listen(3003);

    io.on('connection', function (socket) {
        socket.emit('news', {hello: 'world'});
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });
};