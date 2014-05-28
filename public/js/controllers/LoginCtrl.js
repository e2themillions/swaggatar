  /**********************************************************************
 * Login controller
 **********************************************************************/

angular.module('LoginCtrl', []).controller('LoginController',  function($scope, $rootScope, $http, $location) {

	$scope.creds = {
	    email: '',
	    password: ''
	};
	$scope.tagline = 'logsy';	

	
	$scope.alerts = [];
	// $scope.alerts = [
	//     { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
	//     { type: 'success', msg: 'Well done ya bish! You successfully read this important alert message.' }
	//   ];

	  // This object will be filled by the form
	  $scope.user = {};

	  // Register the DoLoginYaBish() function
	  $scope.DoLoginYaBish = function(){

	    $http.post('/login', {
	      email: $scope.creds.email,
	      password: $scope.creds.password,
	    })
	    .success(function(user){
	    	alert("wow");
	      // No error: authentication OK
	      $rootScope.message = 'Authentication successful!';
	      $location.url('/nerds');
	    })
	    .error(function(){
	    	alert("such sadness");
	      // Error: authentication failed
	      $rootScope.message = 'Authentication failed.';
	      $location.url('/login');
	    });
	  };


});






