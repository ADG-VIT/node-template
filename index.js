/*
 * This file simply brings it all together and starts the server
 * Use the routes defined in routes.js in your serve
 **/

const app = require('express')();
const mongoose = require('mongoose');

const routes = require('./routes/routes');
const config = require('./config');

// use the routes defined in the routes.js file
app.use('/', routes);

// this line connects to the mongodb database
// make sure your server is up and running -_-
mongoose.connect(config.dburl);
    

// this function starts the server at the port specified in config.js
// your server is running on http://127.0.0.1:<port>
app.listen(config.port, () => {
    console.log('server running at port', config.port);
});