var configFile = './' + (process.env.NODE_ENV || "dev") + '.json';


module.exports = require(configFile);