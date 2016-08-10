define([], function(argument) {
	return [function() {
		return {
			restrict: 'A',
			link: function(scope, element, attr) {
				var oldValue = null;
				element.on('keyup', function(e) {
					var val = element.val();
					if (e.which == 8 && element[0].selectionStart == 0) {
						var input = element.parent().prev().find('input');
						if (input.length)
							input.focus();
					} else {
						var maxLength = 5;
						var myLength = val.length;
						if (myLength >= maxLength) {
							var input = element.parent().next().find('input');
							if (input.length)
								input.focus();
						}
					}
				})
			}
		}
	}]
})