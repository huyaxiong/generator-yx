var express = require('express');
var bodyParser = require('body-parser');
var path =require('path');

var app = express();

app.use(bodyParser());

app.set('port', process.env.PORT || 3000);

//app.use(express.static('../client/'));

app.set('views', 'client/htmls');

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});

app.post('/test', function(req, res){

    res.type('text/plain');
    res.send('Mobile Num:' + req.body.mobileNum);
});

app.get('/html', function(req, res){

    res.sendFile(path.join(__dirname, '/client/htmls/test.html'));
});

// custom 404 page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
