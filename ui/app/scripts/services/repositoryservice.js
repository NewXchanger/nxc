/**
 * Created by sdjamaa on 12/01/14.
 */

'use strict';

angular.module('nxc')
    .service('RepositoryService', ['$q', '$http', function($q, $http) {

        return {
            getRegions: function() {
                return $http.get('/api/regions');
            }
        }

}]);
