sealApp.factory('comments', ['$http', function($http) { 
  return $http.get('../comments.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);