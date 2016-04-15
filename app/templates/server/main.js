require('./config/db')();

var app = require('./config/middleware')();

require('./router/userRouter')(app);

require('./config/errorHandler')(app);






