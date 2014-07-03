
var xpagesBeerApp = angular.module('xpagesBeerApp', []);

xpagesBeerApp.controller('BeerListCtrl', ['$scope', function($scope){
	
	//$scope = access to controller from the view

	$scope.user = 'Mark';

	$scope.beers = [
		{ 'name' : 'Grolsch', 'image' : 'img/grolsch.jpg'},
		{ 'name' : 'Jupiler', 'image' : 'img/jupiler.jpg'},
		{ 'name' : 'Heineken', 'image' : 'img/heineken.jpg'}
	];

}]);
