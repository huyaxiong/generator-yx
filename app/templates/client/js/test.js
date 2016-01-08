function submit() {

    var mobileNum = $('#mobile').val();
    $.post('/test', {mobileNum: mobileNum}, function (r) {

        alert(r);
    });
}
