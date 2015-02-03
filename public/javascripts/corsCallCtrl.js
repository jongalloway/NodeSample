'use strict';
angular.module('corsApp')
.controller('corsCallCtrl', ['$scope', '$location', 'corsCallSvc', 'adalAuthenticationService', function ($scope, $location, corsCallSvc, adalService) {
    $scope.error = "";
    $scope.loadingMessage = "Loading...";
    $scope.corsCallList = null;

    $scope.populate = function () {

        corsCallSvc.getItems().then(function (result) {
            $scope.corsCallList = result;
            $scope.loadingMessage = "";
        },function (err) {
            $scope.error = err;
            $scope.loadingMessage = "";
        });
    };
}]);