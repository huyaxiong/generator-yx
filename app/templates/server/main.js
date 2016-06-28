require('./config/db')();

var app = require('./config/middleware')();

require('./router')(app);

require('./config/errorHandler')(app);







