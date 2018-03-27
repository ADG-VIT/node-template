/* This file is where you create an API using express
 * and define your routes
 * a route is simply the /something part of a URL
 * like something.com/something
 * you can define how you want your server to respond to a
 * request to a route over here
 **/
const router = require('express').Router();

//body parser lets express deal with form data and all
const bodyParser = require('body-parser');

// you'll use the controller here to interact with your DB :)
const modelController = require('../controllers/modelNameController');

/* ask your router to use body-parser when it gets requests
 * This is an example of express middleware
 * middlwares are functions that run before a request reaches 
 * the route
 * Each middlware does it's work and calls the next middleware
 * Hence the order in which you add your middleware is also important
 **/ 
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

/* this route responds to a POST request at /create
 * POST is a type of HTTP request
 * google is your best friend here :)
 * basically use post requests when transferring data
 * from forms and shit
 **/
router.post('/create', function(req, res){

    // req.body contains data sent via forms or API calls
    // made using POST requests
    const value1 = req.body.value1;
    const value2 = req.body.value2;
    
    // use your controller
    // yayy
    modelController.insertDoc(value1, value2, function(err, info){
        /* The res object is the response from the server 
         * error code when an error occurs is 400
         * you set that using status
         * you then send the data in JSON format
         * with appropriate information
         **/
        if(err) res.status(200).json({
            status: 400,
            info: JSON.stringify(err)
        });
        // response when everything worked well :)
        else res.status(200).json({
            status: 200,
            info: JSON.stringify(info)
        });
    });
});

/* This route handles a get request to /all
 * GET requests are used to get something
 * in this case, all the records from the model collection
 **/
router.all('/all', (req, res) => {
    // use your controller here
    modelController.getAllRecords(function(err, info) {
        /* The res object is the response from the server 
         * error code when an error occurs is 400
         * you set that using status
         * you then send the data in JSON format
         * with appropriate information
         **/
        if(err) res.status(200).json({
            status: 400,
            info: JSON.stringify(err)
        });
        // all worked well here! 
        else res.status(200).json({
            status: 200,
            info: JSON.stringify(info)
        });
    });
});

/* Here's an example where a get request comes with a parameter
 * parameters are things that you add to the URL string
 * which can be parsed by the server and you can execute functions based 
 * on these params
 **/
router.get('/query', function(req, res) {
    // heres where you get that parameter from the URL
    const value1 = req.query.value1;
    // use your controller here
    modelController.basicQuery(value1, function(err, info) {
        /* The res object is the response from the server 
         * error code when an error occurs is 400
         * you set that using status
         * you then send the data in JSON format
         * with appropriate information
         **/
        if(err) res.status(200).json({
            status: 400,
            info: JSON.stringify(err)
        });
        // all worked well here! 
        else res.status(200).json({
            status: 200,
            info: JSON.stringify(info)
        });
    });
});

// export your router so that you can use it with the server
// check out the index.js file
module.exports = router;