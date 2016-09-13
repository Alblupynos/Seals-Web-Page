sealApp.controller('CommentsController', ['$scope', 'comments', function($scope, comments) {
	comments.success(function(data) {
    	$scope.list = data;
  	});
}]);