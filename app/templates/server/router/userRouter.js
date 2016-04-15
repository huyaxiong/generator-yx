const User = require('../model/User');
const uuid = require('node-uuid');


module.exports = function (app) {

    app.get('/user', function (req, res) {

        console.log('test')
    });
};
