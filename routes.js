var GoatRoutes = angular.module('GoatRoutes', ['ui.router']);

GoatRoutes.config('$stateProvider',[function($stateProvider){
	$stateProvider
	.state('goats',{
		url:'/goats',
		resolve:{
			goats: ['GoatsService', function(goatsService){
				return goatsService.getGoats();

			}];

			goat: function(){
				return {};
			}
		}, 
		templateUrl : '...',
		controller : 'GoatsController',
		controllerAs : 'goats'

	})
	...
	...
	...
	
	
}]);