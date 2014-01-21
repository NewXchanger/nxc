'use strict';

angular.module('nxc')
    .service('MainService', ['$q', '$http', function($q, $http) {

    return {
        search: function(want, have) {
            return $http.get('/api/search/' + want + '/' + have);
        },

        get: function(id) {
            return $http.get('/api/products/' + id);
        },
        create: function(product) {
            alert("HAHA")
            return $http.post('/api/products/create', product)
        }
    }

}]);
