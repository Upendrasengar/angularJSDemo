define(['../data'], function(data) {
	return ['$scope', '$state', '$stateParams','$http', function(scope, state, stateParams,http) {
		scope.stateParams = stateParams;
		scope.data = data;
		scope.orderArray = [];
		scope.updateOrder = function(val){
			var isPresent = scope.orderArray.indexOf(val);
			if(~isPresent){
				 scope.orderArray.splice(isPresent, 1);
			} else{
				scope.orderArray.push(val);
			}
		}
	}];
})