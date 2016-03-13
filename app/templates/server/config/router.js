const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const path = require('path');
const settings = require('./settings');


module.exports = function () {

    var app = express();
    app.set('port', process.env.PORT || settings.port);
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static(path.resolve(__dirname, '..', '..', 'client')));
    app.use(compress());

    app.listen(app.get('port'), function () {

        console.log('Express started on http://localhost:' + app.get('port'));
    });

    return app;
};


