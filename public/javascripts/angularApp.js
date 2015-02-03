'use strict';
angular.module('corsApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/home.html",
    }).when("/searchfile", {
        controller: "corsCallCtrl",
        templateUrl: "/App/Views/searchfile.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).otherwise({ redirectTo: "/Home" });


    adalProvider.init(
        {
            tenant: 'e0b38519-868b-4aa1-80d8-d1b3c7d75608',
            clientId: 'd284e445-0c91-4538-9e16-3e0d33505329',
            instance: 'https://login.windows-ppe.net/',
            postLogoutRedirectUri: '#/login',
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
