var sealApp = angular.module("sealApp");
var model = {
    items: [
        { name: "Chandler Bing", comment: "They are so cute!"},
        { name: "John Doe", comment: "One word... WOW!!"},
        { name: "Chandler Bing", comment: "I love seals!"}
    ]
};

sealApp.controller("CommentsController", function ($scope) {
    $scope.list = model;  
});