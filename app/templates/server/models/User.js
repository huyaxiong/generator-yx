import mongoose from 'config/db';


var userSchema = mongoose.Schema({
    name: String,
    mobile: String
});
var User = mongoose.model('User', userSchema);

export default User;
