import {static as staticDir} from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import compress from 'compression';
import path from 'path';
import settings from '~/settings';
import morgan from 'morgan';
import sessionMiddleware from './session';
import cors from 'cors';


export function useMiddlewaresPre(app) {

    app.set('port', process.env.PORT || settings.port);
    app.use(compress());
    app.use(bodyParser.json({limit: '10mb'}));
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
    app.use("/node_modules", staticDir(path.resolve(__dirname, '..', '..', 'node_modules')));
    app.use("/images", staticDir(path.resolve(__dirname, '..', '..', 'images')));
    app.use("/fonts", staticDir(path.resolve(__dirname, '..', '..', 'fonts')));
    app.use("/dist", staticDir(path.resolve(__dirname, '..', '..', 'dist')));
    app.use(morgan('tiny'));
    app.use(favicon(path.resolve(__dirname, '..', '..', 'favicon.ico')));
    app.use(sessionMiddleware);
    app.use(cors({
        // origin: '192.168.0.115:8080',
        // credentials:true
    }));

    app.listen(app.get('port'), function () {
        console.log('express started.');
        console.log('http://127.0.0.1:' + app.get('port'));
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


