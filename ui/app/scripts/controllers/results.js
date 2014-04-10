'use strict';

function ResultsCtrl($scope, $location, $routeParams, MainService, RepositoryService) {

    MainService.search($routeParams.searchMode, $routeParams.myObject).success(function (data, status, headers, config) {
        $scope.products = data;
    });

    RepositoryService.getRegions().success(function (data, status, headers, config) {
        $scope.regions = data;
    });

    $scope.productDetails = function (product) {
        $location.path('/products/' + product._id.$oid);
    };

}

angular.module('nxc')
    .controller('ResultsCtrl', [ '$scope', '$location', '$routeParams', 'MainService', 'RepositoryService', ResultsCtrl]);