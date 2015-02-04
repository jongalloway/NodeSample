'use strict';
angular.module('corsApp')
.controller('corsCallCtrl', ['$scope', '$routeParams', '$location', 'corsCallSvc', 'adalAuthenticationService', function ($scope, $routeParams, $location, corsCallSvc, adalService) {
    $scope.error = "";
    $scope.loadingMessage = "Loading...";
    $scope.corsCallList = null;

    $scope.populate = function () {

        corsCallSvc.getItems($routeParams.name).then(function (result) {
            $scope.corsCallList = result;
            $scope.loadingMessage = "";
        },function (err) {
            $scope.error = err;
            $scope.loadingMessage = "";
        });
    };
}]);