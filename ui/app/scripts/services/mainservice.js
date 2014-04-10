'use strict';

function MainService($q, $http) {

    return {
        search: function(want, have) {
            return $http.get('/api/search/' + want + '/' + have);
        },

        get: function(id) {
            return $http.get('/api/products/' + id);
        },
        create: function(product) {
            return $http.post('/api/products/create', product);
        }
    };

}

angular.module('nxc')
    .service('MainService', ['$q', '$http', MainService]);
