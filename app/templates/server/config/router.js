import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import settings from './settings';


let app = express();

app.set('port', process.env.PORT || settings.port);

app.listen(app.get('port'), function () {

    console.log('Express started on http://localhost:' + app.get('port'));
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'client')));

export default app;



