/**
 * Created with IntelliJ IDEA.
 * User: sdj
 * Date: 02/12/13
 * Time: 17:43
 * To change this template use File | Settings | File Templates.
 */

angular.module('nxc')
    .controller('ProductCtrl', [ "$scope", "$location", "$routeParams", "$window", "$modal", "MainService", function ($scope, $location, $routeParams, $window, $modal, MainService) {

        MainService.get($routeParams.id).success(function(data, status, headers, config){
            $scope.product = data[0];
            console.log($scope.product.pending_offers)
        });

        $scope.goBack = function() {
            $window.history.back();
        }

        $scope.user_details = function(product) {
            $location.path("/users/" + product.userid)
        };

        $scope.doOffer = function () {

            $modal.open({
                templateUrl: 'views/addproduct.html',
                controller: function ($scope, $modalInstance) {
                    //$scope.user = user;
                    $scope.submit = function () {
                        $modalInstance.dismiss('cancel');
                    }
                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                resolve: {
                    user: function () {
                        return $scope.user;
                    }
                }
            });
        }

    }]);