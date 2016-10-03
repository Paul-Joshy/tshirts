tShirtApp.controller('tShirtCtrl',['$scope','$location',function($scope,$location){
	var i = 0;
	increment(i);
	decrement(i);
	$scope.tShirts = select10(i);
	/*$scope.incrementResult = function(){
		console.log("Incremented");
		i++;
	};
	
	$scope.decrementResult = function(){
		console.log("decremented");
		if(i !== 0)
			i--;
	};*/
	
}]);