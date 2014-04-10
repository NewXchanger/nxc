/**
 * Created with IntelliJ IDEA.
 * User: sdj
 * Date: 02/12/13
 * Time: 17:43
 * To change this template use File | Settings | File Templates.
 */

'use strict';

function ProductCtrl($scope, $location, $routeParams, $window, $modal, MainService) {

    MainService.get($routeParams.id).success(function (data, status, headers, config) {
        $scope.product = data[0];
    });

    $scope.goBack = function () {
        $window.history.back();
    };

    $scope.userDetails = function (product) {
        $location.path('/users/' + product.userid);
    };

    $scope.doOffer = function () {

        $modal.open({
                templateUrl: 'views/addproduct.html',
                controller: function ($scope, $modalInstance) {
                    //$scope.user = user;
                    $scope.submit = function () {
                        $modalInstance.dismiss('cancel');
                    };
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                resolve: {
                    user: function () {
                        return $scope.user;
                    }
                }
            }
        );
    };
}

angular.module('nxc')
    .controller('ProductCtrl', [ '$scope', '$location', '$routeParams', '$window', '$modal', 'MainService', ProductCtrl]);
/*
angular.module('ui.bootstrap.setNgAnimate', ['ngAnimate'])
    .directive('setNgAnimate', ['$animate', function ($animate) {
        return {
            link: function ($scope, $element, $attrs) {

                $scope.$watch( function() {
                    return $scope.$eval($attrs.setNgAnimate, $scope);
                }, function(valnew, valold){
                    $animate.enabled(!!valnew, $element);
                });


            }
        };
    }]);*/