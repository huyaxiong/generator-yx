var tungus = require('tungus');
var mongoose = require('mongoose');
var path = require('path');

module.exports = function () {

    var dbPath = 'tingodb://' + path.resolve(__dirname, '..', 'data');
    mongoose.connect(dbPath, function (err) {
        // if we failed to connect, abort
        if (err) throw err;

        // we connected ok
        createData();
    });

    var userSchema = mongoose.Schema({
        name: String,
        mobile: String
    });
    var User = mongoose.model('User', userSchema);


    function createData() {

        var user = {
            name: 'HYX',
            mobile: '110'
        };
        User.create(user).then(function (err, user) {

            User.find().distinct('name').exec(function(err, count){
                console.log(count.toJSON());
                console.log(err);
            });
        })
    }
};
