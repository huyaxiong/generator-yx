const User = require('../model/User');


module.exports = function (app) {

    app.get('/user', function (req, res) {

        console.log('test')
    });
};
