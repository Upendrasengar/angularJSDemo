requirejs.config({
    baseUrl: 'app',
    paths: {
        'angular': 'ext/angular',
        'jquery': 'ext/jquery',
        'angular-ui-router': 'ext/angular-ui-router',
        'bootstrap': 'ext/bootstrap',
        'underscore': 'ext/underscore',
        'angularAMD': 'ext/angularAMD',
        'ngAnimate': 'ext/angular-animate.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'angular': {
            deps: [
                'jquery'
            ],
            exports: 'angular'
        },
        'underscore': {
            "exports": '_'
        },
        'angular-ui-router': {
            deps: [
                'angular'
            ]
        },
        'ngAnimate': {
            deps: [
                'angular', 'angular-ui-router'
            ]
        },
        'angularAMD': {
            deps: [
                'angular'
            ]
        },
        bootstrap: {
            deps: [
                'jquery'
            ]
        }
    },
    deps: [
        'app'
    ],
    packages: []
});
