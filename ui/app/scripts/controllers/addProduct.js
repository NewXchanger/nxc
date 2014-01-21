/**
 * Created with IntelliJ IDEA.
 * User: Sofian DJAMAA
 * Date: 10/12/13
 * Time: 16:36
 * To change this template use File | Settings | File Templates.
 */

'use strict';

angular.module('nxc')
    .controller('AddProductCtrl', ["$scope", "$upload", "MainService", function ($scope, $upload, MainService) {

        var product = $scope.product = {
            "name": "",
            "desc": "",
            "wants": [  ],
            "photos": [  ],
            "loc": "",
            "nxc": ""
        };
        $scope.addWant = function() {
            product.wants.push("");
        };

        $scope.change = function (item, idx)
        {
            product.wants[idx] = item;
        };

        $scope.removeWant = function(idx) {
            var item_to_delete = product.wants[idx];
            product.wants.splice(idx, 1);
        };

        $scope.saveProduct = function() {
            MainService.create(product).success(function(data, status, headers, config){

            });
        };

        $scope.onFileSelect = function($files) {
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                $scope.upload = $upload.upload({
                    url: '/api/upload/photo', //upload.php script, node.js route, or servlet url
                    // method: POST or PUT,
                    // headers: {'headerKey': 'headerValue'}, withCredential: true,
                    data: {},
                    file: file
                    // file: $files, //upload multiple files, this feature only works in HTML5 FromData browsers
                    /* set file formData name for 'Content-Desposition' header. Default: 'file' */
                    //fileFormDataName: myFile,
                    /* customize how data is added to formData. See #40#issuecomment-28612000 for example */
                    //formDataAppender: function(formData, key, val){}
                }).progress(function(evt) {
                        console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
                    }).success(function(data, status, headers, config) {
                        // file is uploaded successfully
                        console.log(data);
                        product.photos.push(data.filename)
                    });
                //.error(...)
                //.then(success, error, progress);
            }
        };
    }]);