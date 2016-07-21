require('./config/db')();

var app = require('./config/middleware-pre')();

require('./router')(app);

require('./config/middleware-post')(app);







