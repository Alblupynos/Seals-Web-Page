var sealApp = angular.module("sealApp");
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