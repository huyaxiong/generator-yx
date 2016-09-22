const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const path = require('path');
const settings = require('../settings');
const morgan = require('morgan');
const favicon = require('serve-favicon');


module.exports = function () {

    var app = express();
    app.set('port', process.env.PORT || settings.port);
    app.use(compress());
    app.use(bodyParser.json({limit: '10mb'}));
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
    app.use("/node_modules", express.static(path.resolve(__dirname, '..', '..', 'node_modules')));
    app.use("/image", express.static(path.resolve(__dirname, '..', '..', 'image')));
    app.use("/dist", express.static(path.resolve(__dirname, '..', '..', 'dist')));
    app.use(morgan('tiny'));
    app.use(favicon(path.resolve(__dirname, '..', '..', 'favicon.ico')));

    app.listen(app.get('port'), function () {
        console.log('app started.');
    });
    return app;
};


