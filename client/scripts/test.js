function submit() {

    var mobileNum = $('#mobile').val();
    console.log(mobileNum)
    $.post('/test', {mobileNum: mobileNum}, function (r) {

        alert(r);
    });
}


var socket = io.connect('http://127.0.0.1:3002');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});
