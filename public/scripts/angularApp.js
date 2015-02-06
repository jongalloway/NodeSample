'use strict';
angular.module('docsApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {
    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/home.html",
    }).when("/search", {
        controller: "searchCtrl",
        templateUrl: "/search.html",
        requireADLogin: true,
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            tenant: 'dpe1.onmicrosoft.com',
            clientId: '00019913-06fa-48f6-91f6-5f959981687b',
            endpoints: [
            {
                url: 'https://dpe1-my.sharepoint.com/_api/',
                resourceId: 'https://dpe1-my.sharepoint.com/
            }
            ]
        },
        $httpProvider
        );
   
}]);
