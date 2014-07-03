
var xpagesBeerApp = angular.module('xpagesBeerApp', []);

xpagesBeerApp.controller('BeerListCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('/xpagesandbeer/angular.nsf/api/data/collections/name/vwBeers')
		.success( function(data) {

			$scope.beers = data;

		});


	//function to create a beer
	$scope.createBeer = function() {
		$http.post('/xpagesandbeer/angular.nsf/api/data/documents?form=fBeer', $scope.formData)
			.success(function(data) {

				$scope.formData = {}; //clear form

				//let's make another get request to populate the list with the newly added beer
				getAllBeers();
				
				
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	//delete a beer
	$scope.deleteBeer = function(beer) {
		
		$http.delete('/xpagesandbeer/angular.nsf/api/data/documents/unid/' + beer['@unid'] )
			.success(function(data) {
				getAllBeers();
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
			
	};

	function getAllBeers() {

		$http.get('/xpagesandbeer/angular.nsf/api/data/collections/name/vwBeers')
			.success( function(data) {
				$scope.beers = data;
			});

	}
	
}]);
