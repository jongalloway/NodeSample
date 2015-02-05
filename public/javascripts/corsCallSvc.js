'use strict';

function humanFileSize(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if (bytes < thresh) return bytes + ' B';
    var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while(bytes >= thresh);
    return bytes.toFixed(1) + ' ' + units[u];
}

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
                            size: humanFileSize(files.results[count]),
                            lastModifiedBy: item.LastModifiedBy.Name
                        });
                    }
                   return items;
               }, function (error) {
               });
        }
    };
}]);
