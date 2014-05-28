//THIS IS THE SERVER SIDE ROUTES
module.exports = function(app, passport) {


		// MIDDLEWARE  AND HELPER FUNCTIONS ========================================
		// middleware to check if user is authenticated..
		var auth = function(req, res, next) { 
			if (!req.isAuthenticated()) 
				//res.send(401); 
				res.status(401).sendfile('./public/views/index.html');
			else next(); 
		}; 


		var angularHandler = function(req, res) {
			res.sendfile('./public/views/index.html'); // load our public/index.html file (will be controlled by angular)
		}

		// server routes ===========================================================
		// handle things like api calls


		// Handle login 
		app.post('/login', passport.authenticate('local-login'), function(req,res) {res.send(req.user);});

		// route to log out 
		app.get('/logout', function(req, res){ req.logout(); res.sendfile('./public/views/index.html'); });

		// route to test if the user is logged in or not 
		app.get('/loggedin', function(req, res) { res.send(req.isAuthenticated() ? req.user : '0'); });

		


		// process the signup form
		app.post('/signup', passport.authenticate('local-signup', {			
			successRedirect : '/', // redirect to the secure profile section
			failureRedirect : '/signup', // redirect back to the signup page if there is an error
			failureFlash : false // dis-allow flash messages
		}));

		// sample api route
		// app.get('/api/nerds', function(req, res) {
		// 	// use mongoose to get all nerds in the database
		// 	Nerd.find(function(err, nerds) {

		// 		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		// 		if (err)
		// 			res.send(err);

		// 		res.json(nerds); // return all nerds in JSON format
		// 	});
		// });

		// route to handle creating (app.post)
		// route to handle delete (app.delete)

		app.get('/myswag',auth,angularHandler);


		// frontend routes =========================================================
		// route to handle all angular requests
		app.get('*', angularHandler);

		


	};