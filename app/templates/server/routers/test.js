import app from '../config/router';
import User from '../models/User';


app.get('/test', function (req, res) {

    console.log('test');
    User.create({user:'fdfdf'});
});

export default app;