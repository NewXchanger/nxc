/**
 * Created with IntelliJ IDEA.
 * User: sdj
 * Date: 24/11/13
 * Time: 15:38
 * To change this template use File | Settings | File Templates.
 */

'use strict';

angular.module('productService', ['ngResource']).
    factory('products', function ($resource) {
        return $resource('api/product/:id');
    });