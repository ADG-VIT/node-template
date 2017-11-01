/*
 * This file defines a few basic config settings for your project
 * currently the url of the database and the port at which your server runs are defined
 **/

// initialize config object
let config = {};

/*
 * the port at which your server runs
 * ignore this part if it doesn't make sense
 * process.env.PORT gets the port number from the service running the server IF it specifies it
 * if it does not, process.env.PORT is undefined and config.port evaluates to 3000 (default value)
 **/
config.port = process.env.PORT || 3000;

// change the db_name to something that concerns your project
config.dburl = 'mongodb://127.0.0.1:27017/db_name';

module.exports = config;