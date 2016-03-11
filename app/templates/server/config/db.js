var mongoose = require('mongoose');


module.exports = function () {

    mongoose.connect('mongodb://localhost:27017/local');
    mongoose.connection.once('open', function() {

        console.log('mongodb connected.');
    });
};
