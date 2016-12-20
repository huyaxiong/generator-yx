import {static as staticDir} from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import compress from 'compression';
import path from 'path';
import settings from '~/settings';
import morgan from 'morgan';


export function useMiddlewaresPre(app) {

    app.set('port', process.env.PORT || settings.port);
    app.use(compress());
    app.use(bodyParser.json({limit: '10mb'}));
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
    app.use("/node_modules", staticDir(path.resolve(__dirname, '..', '..', 'node_modules')));
    app.use("/image", staticDir(path.resolve(__dirname, '..', '..', 'image')));
    app.use("/music", staticDir(path.resolve(__dirname, '..', '..', 'music')));
    app.use("/font", staticDir(path.resolve(__dirname, '..', '..', 'font')));
    app.use("/dist", staticDir(path.resolve(__dirname, '..', '..', 'dist')));
    app.use(morgan('tiny'));
    app.use(favicon(path.resolve(__dirname, '..', '..', 'favicon.ico')));

    app.listen(app.get('port'), function () {
        console.log('express started.');
    });
}

export function useMiddlewaresPost(app) {

    app.get('/', function (req, res) {

        res.sendFile(path.resolve(__dirname, '..', '..', 'index.html'));
    });

    app.get('/404', function (req, res) {

        res.sendFile(path.resolve(__dirname, '..', '..', '404.html'));
    });

    app.use(function (req, res) {

        res.redirect('/404');
    });

    app.use(function (err, req, res, next) {

        console.error(err.stack);
        res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
    });
}


