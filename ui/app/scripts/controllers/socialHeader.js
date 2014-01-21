/**
 * Created by sdjamaa on 30/12/13.
 */


angular.module('nxc')
    .controller('SocialHeaderCtrl', [ "$scope", function ($scope) {

        $scope.isBoxHidden = true;

        $scope.changeTextBoxWidth = function() {
            console.log("LOL");
        };

        $scope.resizeBox = function() {
            console.log("MDR");
        };
    }]);


