'use strict';

angular.module('nxc')
    .controller('MainCtrl', [ "$scope", "$location",  "$modal", "MainService", function ($scope, $location, $modal, MainService) {

        $scope.iwant = function () {
            $location.path("/results/want/" + $scope.myObject + "/");
        }


        $scope.ihave = function () {
            $location.path("/results/have/" + $scope.myObject + "/");
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
