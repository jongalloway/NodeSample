'use strict';

angular.module('docsApp')
.factory('searchSvc', ['$http', function ($http) {
        return {
            getItems: function () {
                var getOptions = {
                    headers: {
                        'Accept': 'application/json;odata=verbose;'
                    }
                }
                
                var baseUri = 'https://dpe1-my.sharepoint.com/_api/me/';
                
                return $http.get(baseUri + 'files?$select=id,name,lastModifiedBy,size,url',
                getOptions).then(function (results) {
                    var items = new Array();
                    var files = results.data.d;
                    for (var count = 0; count < files.results.length; count++) {
                        var item = files.results[count];
                        var itemName = item.Name;
                        var isWord = (itemName.indexOf("docx") != -1);
                        
                        items.push({
                            name: item.Name,
                            link: item.Url + '?web=1',
                            size: item.Size,
                            lastModifiedBy: item.LastModifiedBy.Name,
                            isWord: isWord
                        });
                    }
                    return items;
                }, function (error) {
                });
            }
        };
    }]);
