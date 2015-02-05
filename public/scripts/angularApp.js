'use strict';
angular.module('docsApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/home.html",
    }).when("/searchfile/:name", {
        controller: "searchCtrl",
        templateUrl: "/search.html",
        requireADLogin: true,
    }).otherwise({ redirectTo: "/Home" });


    adalProvider.init(
        {
            tenant: 'e0b38519-868b-4aa1-80d8-d1b3c7d75608',
            clientId: 'd284e445-0c91-4538-9e16-3e0d33505329',
            instance: 'https://login.windows-ppe.net/',
            endpoints: [
            {
                url: 'https://techedairlift03.spoppe.com/expenses/_api/',
                resourceId: 'https://techedairlift03.spoppe.com'
            }
            ]
        },
        $httpProvider
        );
   
}]);
