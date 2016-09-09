var sealApp = angular.module("sealApp");
sealApp.directive ('addComment', function(){
	return{
  	restrict: 'E',
    scope: { 
      list: '=',
      name: '=',
      comment: '=' 
    },
    template: '<button ng-click="addComment(name, comment)" type="submit" class="btn btn-default">{{ buttonText }}</button>',
    // templateUrl: 'script/directives/addComment.html',
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
