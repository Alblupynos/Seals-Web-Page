var sealApp = angular.module("sealApp");
sealApp.directive ('addComment', function(){
	return{
  	restrict: 'E',
    scope: { 
      list: '=',
      name: '=',
      comment: '=' 
    },
    templateUrl: 'views/addComment.html',
    link: function(scope, element, attrs) { 
      scope.buttonText = "Send",  

      scope.addComment = function(name, comment) {
        if(name != "" && comment != "") {
          scope.list.items.push({name: name, comment: comment});
          scope.name = "";
          scope.comment = "";
        }
      }   
    }
  };  
});
