/**
 * Created with IntelliJ IDEA.
 * User: sdj
 * Date: 24/11/13
 * Time: 13:59
 * To change this template use File | Settings | File Templates.
 */
'use strict';

services.factory('LoginService', [function() {
    var sdo = {
        isLogged: false,
        username: ''
    };
    return sdo;
}]);