const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
  
    console.log("Successfully connected to the database");

});

module.exports = db;