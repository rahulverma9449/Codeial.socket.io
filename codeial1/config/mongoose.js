const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rahulverma9559:pWfzCo7RU2pSSCir@cluster0.7sa8r47.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function() {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;