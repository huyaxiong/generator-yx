const mongoose = require('mongoose');


module.exports = function () {

    var userSchema = mongoose.Schema({
        name: String,
        mobile: String
    });

    return mongoose.model('User', userSchema);
};