'use strict';

angular.module('nxc', ['ui.bootstrap'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main2.html',
                controller: 'MainCtrl'
            })
            .when('/results/:iwant/:ihave', {
                templateUrl: 'views/results.html',
                controller: 'ResultsCtrl'
            })
            .when('/products/:id', {
                templateUrl: 'views/product.html',
                controller: 'ProductCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

//        $locationProvider.html5Mode(true);

    });
