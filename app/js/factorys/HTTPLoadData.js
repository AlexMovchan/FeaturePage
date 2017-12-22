angular.module("myApp")
    .factory('HttpLoadData', ['$http', function($http) {
        return {
            load: function(data, url = "app/js/modules/requests.php", method = "POST") {
                let array = [];
                for (let key in data) {
                    array.push(key, '=', data[key], '&');
                }
                data = array.slice(0, -1).join('');

                return $http({
                    url: url,
                    method: method,
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function(response) {
                    return response.data;
                });

            }
        }
    }]);