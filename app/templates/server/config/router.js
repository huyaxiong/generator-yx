var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var settings = require('./settings');


module.exports = function () {

    var app = express();

    app.set('port', process.env.PORT || settings.port);

    app.listen(app.get('port'), function () {

        console.log('Express started on http://localhost:' + app.get('port'));
    });

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    //app.use(bodyParser.text({
    //    limit:'2mb'
    //}));
    app.use(express.static(path.resolve(__dirname, '..', 'client')));

    return app;
};


