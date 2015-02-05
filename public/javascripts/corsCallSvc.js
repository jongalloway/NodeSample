'use strict';

angular.module('corsApp')
.factory('corsCallSvc', ['$http', function ($http) {
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
                        items.push({
                            name: files.results[count].Name,
                            link: files.results[count].Url + '?web=1',
                            size: files.results[count].length,
                            lastModifiedBy: item.LastModifiedBy.Name
                        });
                    }
                   return items;
               }, function (error) {
               });
        }
    };
}]);
