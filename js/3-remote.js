
var xpagesBeerApp = angular.module('xpagesBeerApp', []);

xpagesBeerApp.controller('BeerListCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('/xpagesandbeer/angular.nsf/api/data/collections/name/vwBeers')
	
		.success( function(data) {

			$scope.beers = data;

		});

}]);
