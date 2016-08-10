define(['app.routes', 'app.common', 'services/dataStorageService', 'directives/customNumberDir', 'directives/inputFocusDir'],
	function(runConfig, angularAMD, factory, customNumberDir, inputFocusDir) {
		'use strict';
		// Setup dependencies for the main application angular module....
		var appDeps = ['ui.router', 'ngAnimate'];

		var app = angular.module('demoApp', appDeps);

		//Registering run configuration
		app.config(runConfig);

		app.factory("dataStorage", factory);

		app.directive('customNumberDir', customNumberDir);
		app.directive('inputFocusDir', inputFocusDir);

		return angularAMD.bootstrap(app);
	}
);