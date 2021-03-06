// modules =================================================
	var express = require('express');
	var app     = express();
	var mongoose= require('mongoose');
	var passport = require('passport'); // is this the place to load this (it is not visible unless loaded again in appRoutes.js - TODO:FIX THIS!)
	

	// configuration ===========================================
		
	// config files
	var db = require('./config/db');
	require('./config/passport')(passport);

	var port = process.env.PORT || 8082; // set our port
	mongoose.connect(db.url); // connect to our mongoDB database 

	app.configure(function() {
		app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 					// log every request to the console
		app.use(express.cookieParser());  //required for the session functionality...
		app.use(express.bodyParser()); 						// have the ability to pull information from html in POST
		app.use(express.methodOverride()); 					// have the ability to simulate DELETE and PUT	
		app.use(express.session({ secret: 'whaddayoknowbishwhaddayoknow' })); // session secret


		app.use(passport.initialize());
		app.use(passport.session()); // persistent login sessions
	
	});

	// routes ==================================================
	require('./app/routes')(app, passport); // configure our routes
	

	// start app ===============================================
	app.listen(port);										// startup our app at http://localhost:[xxxx]
	console.log('Shit goes down on port ' + port); 			// shoutout to the console user
	exports = module.exports = app; 						// expose app