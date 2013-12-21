'use strict';

angular.module('nxc')
    .controller('ResultsCtrl', [ "$scope", "$location", "$routeParams", "MainService", function ($scope, $location, $routeParams, MainService) {

        MainService.search($routeParams.iwant, $routeParams.ihave).success(function(data, status, headers, config){
            $scope.products = data;
        });

        $scope.product_details = function(product) {
            $location.path("/products/" + product._id.$oid)
        };

}]);