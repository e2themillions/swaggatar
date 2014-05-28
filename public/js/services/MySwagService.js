angular.module('MySwagService', []).factory('MySwag', ['$http', function($http) {

	return {
		getMySwag: function() {
			return "uhoh.. such not finishedness..wow..";
		}
	}		

}]);