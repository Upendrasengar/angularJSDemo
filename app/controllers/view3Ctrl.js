define([], function() {
	return ['$scope', '$state', 'dataStorage', function(scope, state, dataStorage) {
		scope.data = dataStorage.get();
		scope.phoneNo = null;
		scope.numberVal = [];
		scope.textvalue = [];
		scope.$watchCollection(function() {
			return scope.numberVal;
		}, function(num) {
			if (num.length) {
				scope.addition = num.reduce(function(a, b) {
					return a + b;
				});
			}
		});
		scope.updateFields = function() {
			// if ((scope.addition % 3) == 0) {
			// 	scope.numberVal[0] = scope.numberVal[1] = scope.numberVal[2] = scope.addition / 3;
			// } else {
				scope.numberVal[0] = scope.addition / 2;
				scope.numberVal[1] = (scope.addition - scope.numberVal[0]) / 2
				scope.numberVal[2] = scope.numberVal[1]

			// }
		}
	}];
})