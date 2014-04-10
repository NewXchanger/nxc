/**
 * Created with IntelliJ IDEA.
 * User: sdj
 * Date: 24/11/13
 * Time: 15:38
 * To change this template use File | Settings | File Templates.
 */

'use strict';

function products($resource) {
    return $resource('api/product/:id');
}

angular.module('nxc', ['ngResource']).
    factory('products', products);