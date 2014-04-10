/**
 * Created by sdjamaa on 30/12/13.
 */

'use strict';

function SocialHeaderCtrl ($scope) {

    $scope.isBoxHidden = true;

    $scope.changeTextBoxWidth = function() {
        console.log('LOL');
    };

    $scope.resizeBox = function() {
        console.log('MDR');
    };
}

angular.module('nxc')
    .controller('SocialHeaderCtrl', [ '$scope', SocialHeaderCtrl]);


