var User = require('../models/User');


module.exports = function (app) {

    app.get('/test', function (req, res) {

        console.log('test')
    });
};
