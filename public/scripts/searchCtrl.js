'use strict';
var app = angular.module('corsApp')
.controller('corsCallCtrl', ['$scope', '$routeParams', '$location', 'corsCallSvc', 'adalAuthenticationService', function ($scope, $routeParams, $location, corsCallSvc, adalService) {
    $scope.error = "";
    $scope.loadingMessage = "Loading...";
    $scope.corsCallList = null;

    $scope.populate = function () {

        corsCallSvc.getItems($routeParams.name).then(function (result) {
            $scope.searchTerm = $routeParams.name;
            $scope.corsCallList = result;
            $scope.loadingMessage = "";
        },function (err) {
            $scope.error = err;
            $scope.loadingMessage = "";
        });
    };
}]);

app.filter('bytes', function () {
    return function (bytes, precision) {
        if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
        if (typeof precision === 'undefined') precision = 1;
        var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
            number = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
    }
});
