// bring in mongoose and grab the Schema constructor
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create new Schema, setting keys and value types
var urlSchema = new Schema({
    url: String,
    title: String,
    description: String,
    image: String,
    datePublished: Date
});


// create a model, which holds all of our Url information
var Url = mongoose.model('urls', urlSchema);


//* OPTIONAL *//
// set up the connection to the local database, if it doesn't exist yet one will be created automatically
//>> mongoose.connect('mongodb://localhost/mongo-url');

//if you would like this information private then pull this info from the .env file - check .env set up.
mongoose.connect(process.env.MONGO_URI);

// make the Item Schema available to other files
module.exports = Url;
