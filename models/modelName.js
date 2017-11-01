/* This file is where you define your schema
 * pretty obvious stuff
 **/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaNameSchema = mongoose.Schema({
  field1: {
      type: String,
      required: true,
      unique: true
  },

  field2: {
      type: String,
      required: true
  }
  //,
  //uncomment the comma above if you're adding additional fields

  //example of a field of type date
  /*field3: {
      type: Date
  }
  ,*/

  //example of a composite attribute
  /*field4: {
      attr1: {
          type: String,
          required: true
      },
      attr2: {
          type: String
      }
  }
  ,*/

  /* example of a multivalued attribute
   * multiple values are stored in an array (list)
   **/
  /*field5: {
    type: [String] //array of strings
  }
  */
});

// replace model name with the name of the model you're using. duh. 
const modelName = mongoose.model('modelName', schemaNameSchema);

module.exports = modelName;
