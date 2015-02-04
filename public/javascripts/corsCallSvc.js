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
                
                
                
                return $http.get(baseUri + 'web/getfolderbyserverrelativeurl(\'Shared%20Documents\')/' +
               "files?$select=id,name,dateTimeCreated,webUrl,contentUrl&$orderby=name",
               getOptions).then(function (results) {
                    var items = new Array();
                    var files = results.data.d; //Get employees data
                    for (var count = 0; count < files.length; count++) {
                        items.push({
                            name: files[count].Name,
                            link: files[count].__metadata.id
                        });
                    }
                   return items;
               }, function (error) {
               });
        }
    };
}]);