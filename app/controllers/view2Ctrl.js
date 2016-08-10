define([], function() {
	return ['$scope', '$state','dataStorage', function(scope, state,dataStorage) {
		scope.$watch("inputData", function(n,o){
			dataStorage.set(n);
		});
		scope.changeState = function(){
			state.go("mainView.page3",{pageNum:3});
		}
	}];
})