// This is CLIENT SIDE ROUTES!
angular.module('appRoutes', [])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	    //================================================
	    // Check if the user is connected
	    //================================================
		var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
		    // Initialize a new promise
		    var deferred = $q.defer();

		    // Make an AJAX call to check if the user is logged in
		    $http.get('/loggedin').success(function(user){
		      // Authenticated
		    	if (user !== '0')
		        	$timeout(deferred.resolve, 0);
		        	// Not Authenticated
    		    else {
          			$rootScope.message = 'You need to log in.';
		          	$timeout(function(){deferred.reject();}, 0);
		          	$location.url('/login');
		        }
		    });

		    return deferred.promise;
		};
		//================================================

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// auth protected page that will use the MySwagController
		.when('/myswag', {
			templateUrl: 'views/myswag.html',
			controller: 'MySwagController',
			caseInsensitiveMatch: true,
			resolve: {
	          loggedin: checkLoggedin //defined in app.js
	        }
		})
		

		// 
		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})

		// Sign up form
		.when('/signup', {
			templateUrl: 'views/signup.html',
		})

		// Login form
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController',
			flash: 'wha'
		});


	$locationProvider.html5Mode(true);

}]);