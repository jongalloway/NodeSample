'use strict';

angular.module('docsApp')
.factory('searchSvc', ['$http', function ($http) {
        return {
            getItems: function (name) {
                var getOptions = {
                    headers: {
                        'Accept': 'application/json;odata=verbose'
                    }
                }
                
                var baseUri = 'https://techedairlift03.spoppe.com/expenses/_api/';                
                
                return $http.get(baseUri + 'files?$select=id,name,lastModifiedBy,length,Url',
                getOptions).then(function (results) {
                    var items = new Array();
                    var files = results.data.d; //Get employees data
                    for (var count = 0; count < files.results.length; count++) {
                        var item = files.results[count];
                        items.push({
                            name: item.Name,
                            link: item.Url + '?web=1',
                            size: item.length,
                            lastModifiedBy: item.LastModifiedBy.Name
                        });
                    }
                   return items;
               }, function (error) {
               });
        }
    };
}]);
