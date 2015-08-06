var goats = angular.module('goats', ['GoatServices','GoatRoutes']);

goats.controller('GoatsController', ['$state','$GoatServiceAPI','goat','goats'
	function($state,$GoatServiceAPI,goat,goats){
	
	this.goat = goat.data;
	this.goatQuery = $state.params.query;
	this.goats = goats.data;
	this.goats goats.data;

	this.saveGoat = function(){
		GoatServiceAPI.saveGoat(this.goat)
			.then(function(){
				$state.go('goats');
			});
	};

	this.searchGoats = function(query){
		if(!query.length){
			return $state.go('goats');
		}
		$state.go('search', {query : query});
	};

	});
}]);

