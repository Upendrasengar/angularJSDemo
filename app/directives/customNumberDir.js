define([], function(argument) {
	return ['$filter', function($filter) {
		return {
			restrict: 'A',
			require: '?ngModel',
			scope: {
				inputType: '@'
			},
			link: function(scope, element, attr, ngModelCtrl) {
				function phoneNoFormatter(number) {
					if (!number) {
						return '';
					}
					number = number.replace(/[a-zA-Z]/g, '');
					number = number.replace(/[\(|\)]/g, "");
					number = number.replace(/\s/g, '');
					number = number.replace(/-/g, '');
					number = String(number);
					var formattedNumber = number;
					var area = number.substring(0, 3);
					var front = number.substring(3, 6);
					var end = number.substring(6, 10);
					if (front) {
						formattedNumber = "(" + area + ") " + front;
					}
					if (end) {
						formattedNumber += ("-" + end);
					}
					return formattedNumber;
				}

				function currencyFormatter(number) {
					number = number.replace(/\$|,/g, '');
					if (!number || isNaN(number)) {
						return '';
					}
					number = parseInt(number);
					var re = '\\d(?=(\\d{' + 3 + '})+' + '$' + ')';
					number = (number).toFixed(Math.max(0, 0)).replace(new RegExp(re, 'g'), '$&,');
					return '$' + number;
				}
				ngModelCtrl.$parsers.push(function(viewValue) {
					if (scope.inputType == 'currency') {
						var value = currencyFormatter(viewValue);
						element.val(value);
						ngModelCtrl.$setViewValue(value);
					} else {
						var value = phoneNoFormatter(viewValue);
						element.val(value);
						ngModelCtrl.$setViewValue(value);
					}
					return value;
				});
			}
		}
	}]
})