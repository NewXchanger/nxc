'use strict';


function MainCtrl($scope, $location) {

    $scope.iwant = function () {
        $location.path('/results/want/' + $scope.myObject + '/');
    };


    $scope.ihave = function () {
        $location.path('/results/have/' + $scope.myObject + '/');
    };

    $scope.user = {
        user: 'name',
        password: null,
        loggedStatus: 0
    };

    $scope.switchButtons = function (param) {
        $scope.user.loggedStatus = param;
    };
}

angular.module('nxc')
    .controller('MainCtrl', [ '$scope', '$location', MainCtrl]);
