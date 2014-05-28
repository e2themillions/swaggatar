'use strict';

/**********************************************************************
 * Angular Application (client side)
 **********************************************************************/

angular.module('SwagApp', ['ngRoute', 'appRoutes', 'ui.bootstrap',  'ui.bootstrap.tpls' , 'MainCtrl', 'LoginCtrl', 'MySwagCtrl', 'MySwagService', 'GeekCtrl', 'GeekService'])
		.config(function($routeProvider, $locationProvider, $httpProvider) {



		    //================================================
		    // Add an interceptor for AJAX errors
		    //================================================
		    $httpProvider.responseInterceptors.push(function($q, $location) {
		      return function(promise) {
		        return promise.then(
		          // Success: just return the response
		          function(response){
		            return response;
		          }, 
		          // Error: check the error status to get only the 401
		          function(response) {
		            if (response.status === 401)
		              $location.url('/login');
		            return $q.reject(response);
		          }
		        );
		      }
		    });
		    //================================================
	}) //end of config
	.run(function($rootScope, $http){
	    $rootScope.message = '';

	    // Logout function is available in any pages
	    $rootScope.logout = function(){
	      $rootScope.message = 'Logged out.';
	      $http.post('/logout');
	    };


	});



