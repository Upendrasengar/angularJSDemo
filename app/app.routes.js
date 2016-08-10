define(['app.common', 'controllers/view1Ctrl', 'controllers/view2Ctrl', 'controllers/view3Ctrl'], function(angularAMD, c1, c2, c3) {
	return ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('mainView', angularAMD.route({
				url: '/mainView',
				templateUrl: 'app/views/mainView.html',
				controller: function($scope, $state) {
					//$state.go('mainView.page1', { "pageNum": 1});
				}
			}))
			.state('mainView.page1', angularAMD.route({
				url: '/view1/:pageNum/\:userName',
				templateUrl: 'app/views/view1.html',
				controller: c1,
			}))
			.state('mainView.page2', angularAMD.route({
				url: '/view2/:pageNum/\:userName',
				templateUrl: 'app/views/view2.html',
				controller: c2
			})).state('mainView.page3', angularAMD.route({
				url: '/view3/:pageNum/\:userName',
				templateUrl: 'app/views/view3.html',
				controller: c3
			}));

		// Else
		$urlRouterProvider.otherwise('mainView');
	}];
});