
//initiates the angular app
var findGitUserApp = angular.module('findGitUserApp', []);

findGitUserApp.controller("SearchCtrl", function($scope, $http){
	$scope.foo = "";
	$scope.profileData = "";
	// Simple GET request example:
	$scope.callHttp = function() {
		$http({
		  method: 'GET',
		  url: 'https://api.github.com/users/' + $scope.foo
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    $scope.profileData = response.data;
		    console.log("A response", response);
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log("we got an error", response);
		  });
	}
});

