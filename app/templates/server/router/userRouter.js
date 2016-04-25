const User = require('../model/user');
const uuid = require('node-uuid');


module.exports = function (app) {

    app.get('/user', function (req, res) {

        console.log('test')
    });
};
