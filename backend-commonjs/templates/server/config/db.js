"use strict";
const mongoose = require('mongoose');
const settings = require('../settings');

module.exports = function () {

    mongoose.connect(settings.mongoDBUrl);
    mongoose.connection.once('open', function() {

        console.log('mongodb connected.');
    });
};
