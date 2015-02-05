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
                
                
                return $http.get(baseUri + 'web/getfolderbyserverrelativeurl(\'Shared%20Documents\')/' +
                'files?$select=id,name,lastModifiedBy,length,webUrl,contentUrl&$filter=substringof(\'' + name + '\',Name)&$orderby=name',
                getOptions).then(function (results) {
                    var items = new Array();
                    var files = results.data.d; //Get employees data
                    for (var count = 0; count < files.results.length; count++) {
                        items.push({
                            name: files.results[count].Name,
                            link: files.results[count].__metadata.uri.replace('_api/Web/GetFileByServerRelativeUrl(\'/expenses/', '').replace('\')','') + '?web=1'
                        });
                    }
                   return items;
               }, function (error) {
               });
        }
    };
}]);
