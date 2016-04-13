require('./config/db')();

var app = require('./config/router')();
require('./routers/test')(app);
require('./config/error')(app);






