'use strict';

angular.module('nxc')
    .controller('MainCtrl', [ "$scope", "$location",  "$modal", "MainService", function ($scope, $location, $modal, MainService) {

        $scope.add_product = function () {
            if ($scope.iwant && $scope.ihave) {
                $location.path("/results/" + $scope.iwant + "/" + $scope.ihave + "/");
            }
        }

        $scope.user = {
            user: 'name',
            password: null,
            loggedStatus: 0
        };

        $scope.switchButtons = function (param) {
            alert("KIKOO")
            $scope.user.loggedStatus = param;
        }

     /*   $scope.openLogin = function () {
            var modalInstance = $modal.open({
                templateUrl: 'login.html',
                controller: LoginCtrl
            });
        };*/

    }]);

angular.module('nxc')
