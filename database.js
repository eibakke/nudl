// DB w/mongoose setup
var path = require('path');
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

mongoose.connect('mongodb://localhost:27017/nudl', function(err, db) {
	if (err) console.log("Failed to connect to mongodb: " + err)
	else {
		console.log("Connected to db")
	}
})

var user = require('./models/user');
var mealshare = require('./models/mealshare');

module.exports = {
    User: user.User,
    Mealshare: mealshare.Mealshare,
    db: db
};
