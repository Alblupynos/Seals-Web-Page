var sealApp = angular.module("sealApp");
sealApp.directive ('showComment', function(){
	return{
  	restrict: 'A',
    scope: { 
      list: '=' 
    },
    //templateUrl: 'script/directives/addComment.html',
    link: function(scope, element, attrs) {  
            //var data = scope[attrs["answerList"]];
            if (angular.isArray(list.items)) {
            var divElem = angular.element("<div>").addClass("carousel-inner").attrs('role', 'listbox');
            element.append(divElem);
            for (var i = 0; i < list.items.length; i++) {
                var itemElem = angular.element('<div>').addClass("item");
                itemElem.append(angular.element('<h4>').text(list.items[i].comment));

              
            }
        }  
    }
  };  
});

<div class="item active">
              <h4>"They are so cute!"<br><span style="font-style:normal;">Chandler Bing</span></h4>         
</div>
<div ng-repeat="item in list.items" class="item">
              <h4>{{item.comment}}<br><span style="font-style:normal;">{{item.name}}</span></h4>            
            </div>