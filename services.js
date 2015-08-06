var GoatServices = angular.module('GoatServices',[]);


GoatServices.service('GoatServiceAPI', ['$http',function($http){
	this.saveGoat = function(goat){
		return $http.post('/goats', goat);
	};

	this.getAllGoat = function(){
		return $http.get('/goats');
	};

	this.searchGoat = function(query){
		return $http.get('/goats/search/'+query);
	};
	this.getGoat = function(name){
		return $http.get('/goat/'+name);
	};


}]);
