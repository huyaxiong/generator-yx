const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const path = require('path');
const settings = require('../settings');


module.exports = function () {

    var app = express();
    app.set('port', process.env.PORT || settings.port);
    app.use(compress());
    app.use(bodyParser.json({limit: '10mb'}));
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
    app.use(express.static(path.resolve(__dirname, '..', '..', 'client')));
    app.listen(app.get('port'), function () {

        console.log('app started.');
    });
    return app;
};


