/**
 * Created by sdjamaa on 12/01/14.
 */

'use strict';

function RepositoryService ($q, $http) {

    return {
        getRegions: function () {
            return $http.get('/api/regions');
        }
    };

}

angular.module('nxc')
    .service('RepositoryService', ['$q', '$http', RepositoryService]);
