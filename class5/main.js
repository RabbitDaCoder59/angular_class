const module = angular.module("module", []);
module.controller("controller", $scope => {
    $scope.myName = "chinedu";
    $scope.color = "Black";
}) 

// Creating Directive
module.directive("output", () => {
    return{
        restrict: "EC",
        scope: {
            title: "=",
            arr: "="
        },
        template: "<h1>Hello from {{title}}</h1>"
    }
});
module.directive("include", () => {
    return{
        restrict: "E",
        scope: {
            link: "="
        },
        templateUrl:"./nav.html"
    }
}) 