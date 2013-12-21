'use strict';

angular.module('nxc')
    .controller('LoginCtrl', ["$scope", function ($scope) {

        console.log("LOL")

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

}]);
