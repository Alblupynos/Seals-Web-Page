(function(){
  var app = angular.module("seal", []);
})();

/*
angular
  .module('yourAppModule')
  .directive('btnAutoCollapse', directive);

function directive() {
  var dir = {
    restrict: 'A',
    scope: {},
    link: link
  };
  return dir;

  function link(scope, element, attrs) {    
    element.on('click', function(event) {              
      $(".navbar-collapse.in").collapse('hide');
    });
  }
}


<li class="navbar-btn">
     <a href="#" ng-hide="username" **btn-auto-collapse**>Sign in</a>
</li>



*/