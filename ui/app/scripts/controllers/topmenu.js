/**
 * Created with IntelliJ IDEA.
 * User: Sofian DJAMAA
 * Date: 08/12/13
 * Time: 20:17
 * To change this template use File | Settings | File Templates.
 */

angular.module('nxc')
    .controller('IndexMenuCtrl', [ "$scope", function ($scope) {

        $scope.isLogged = false;// LoginService.sdo.isLogged;

        $scope.isEditForm = false;

    }]);