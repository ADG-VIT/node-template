/* The controller defines a set of functions that let you interact with your database
 * You don't really need something like this if you're only implementing basic CRUD (create, read, update, delete)
 * operations without doing anything else
 * still, looks cool eh?
 **/

 // the database url has been defined in the config file
 // such logical modularity in code is a good practice ;)
const config = require('../config');

// the model you're interacting with
// feel free to require multiple models if your functions simmultaneously interact with multple models
const modelName = require('../models/modelName');

const mongoose = require('mongoose');

// be a little creative with the name okay?
function insertDoc(field1Value, field2Value, callback){
    // you create new documents as a new object in mongoose
    // look at the model to see how the object is structured
    let newModelInstance = new modelName({
        field1: field1Value,
        field2: field2Value
    });

    // save function is called to save instance to DB 
    // i.e. insert into DB
    // read mongoose docs/google if you're confused
    newModelInstance.save(function(err) {
        // node callbacks: basically functions that are called when the higher order function COMPLETES execution
        // this isn't an easy concept to wrap your head around
        // google :3
        if(err) return callback(err);
        else return callback(null, "successfully added admin");
    });
}

/* This function returns all records (read: documents; cuz this is mongoDB)
 * Simple mongoDB
 **/
function getAllRecords(callback){
    /* the basic read operation in mongoDB
     * when you specify an empty object {}
     * the query returns all records 
     * this is the same as select * from tableName in SQL
     **/
    modelName.find({}, function(err, records) {
        // node callbacks: basically functions that are called when the higher order function COMPLETES execution
        // this isn't an easy concept to wrap your head around
        // google :3
        if(err) return callback(err);
        return callback(null, records);
    });
}

function basicQuery(value1, callback){
        /* the basic read operation in mongoDB
         * if you want all records where field1 = value1,
         * the object passed as first argument to find is
         * {field1: value1} 
         * this is the same as select * from tableName where field1=value1 in SQL
         **/
        modelName.find({field1: value1}, function(err, records) {
            // node callbacks: basically functions that are called when the higher order function COMPLETES execution
            // this isn't an easy concept to wrap your head around
            // google :3
            if(err) return callback(err);
            return callback(null, records);
        });
}

// make sure to include references to all your functions in module.exports
// or you wont be able to require them
module.exports = {
    'insertDoc': insertDoc,
    'getAllRecords': getAllRecords,
    'basicQuery': basicQuery
}
