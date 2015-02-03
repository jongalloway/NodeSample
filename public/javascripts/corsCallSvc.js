'use strict';
angular.module('corsApp')
.factory('corsCallSvc', ['$http', function ($http) {
    return {
        getItems: function () {
            var getOptions = {
                headers: {
                    'Accept': 'application/json;odata=verbose'
                }
            }

            var baseUri = 'https://techedairlift03.spoppe.com/expenses/_api/';          

            return $http.get(baseUri + 'web/lists/' +
               "getByTitle('Documents')/items?$select=id,name,dateTimeCreated,webUrl,contentUrl&$orderby=name",
               getOptions).then(function (results) {
                   var employees = results.data.d; //Get employees data

                   return employees;
               }, function (error) {
               });
        }
    };
}]);