// bring in mongoose and grab the Schema constructor
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create new Schema, setting keys and value types
var Url = new Schema({
    link: String,
    title: String,
    description: String
});

//* OPTIONAL *//
// set up the connection to the local database, if it doesn't exist yet one will be created automatically
//>> mongoose.connect('mongodb://localhost/mongo-url');

//if you would like this information private then pull this info from the .env file - check .env set up.
mongoose.connect(process.env.MONGO_URI);

// make the Item Schema available to other files
module.exports = mongoose.model("urls", Url)
