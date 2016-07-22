const mongoose = require('mongoose');


var schema = mongoose.Schema({
    name: String,
    mobile: String
});
var User = mongoose.model('User', schema, 'user');

module.exports = User;