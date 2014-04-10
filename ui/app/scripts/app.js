'use strict';

function RouteProvider($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main2.html',
            controller: 'MainCtrl'
        })
            .when('/results/:searchMode/:myObject', {
                templateUrl: 'views/results.html',
                controller: 'ResultsCtrl'
            })
//            .when('/products/:id', {
//                templateUrl: 'views/product.html',
//                controller: 'ProductCtrl'
//            })
//            .when('/addproduct/', {
//                templateUrl: 'views/addproduct.html',
//                controller: 'AddProductCtrl'
//            })
        .otherwise({
            redirectTo: '/'
        });

//        $locationProvider.html5Mode(true);
}

angular.module('nxc', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'angularFileUpload'])
    .config(['$routeProvider', RouteProvider]);
