function submit() {

    var mobileNum = $('mobile-num').val();
    $.post('/test', {mobileNum: mobileNum}, function (r) {

        alert(r);
    });
}

