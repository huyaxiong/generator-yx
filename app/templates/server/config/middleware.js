const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const path = require('path');
const settings = require('./settings');


module.exports = function () {

    var app = express();
    app.set('port', process.env.PORT || settings.port);
    app.use(bodyParser.json({limit: '20mb'}));
    app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
    app.use(express.static(path.resolve(__dirname, '..', '..', 'client')));
    app.use(compress());

    app.listen(app.get('port'), function () {

        console.log('express started.');
    });

    return app;
};


