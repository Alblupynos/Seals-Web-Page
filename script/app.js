var model = {
    items: [
        { name: "Chandler Bing", comment: "They are so cute!"},
        { name: "John Doe", comment: "One word... WOW!!"},
        { name: "Chandler Bing", comment: "I love seals!"}
    ]
};
var sealApp = angular.module("seal", []);

sealApp.controller("CommentsController", function ($scope) {
$scope.list = model;
$scope.addComment = function(name, comment) {
  if(name != "" && comment != "") {
    $scope.list.items.push({name: name, comment: comment});
  }
}   
});

sealApp.directive('btnAutoCollapse', function() {
  return {
    restrict: 'A',
    scope: {},
    link: link
  };
  function link(scope, element, attrs) {    
    element.on('click', function(event) {              
      $(".navbar-collapse.in").collapse('hide');
    });
  }
});



