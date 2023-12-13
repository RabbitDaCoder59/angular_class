const module = angular.module("module", []);
module.controller("controller", $scope => {
    $scope.myStyle = {
        backgroundColor: "purple",
        "font-size": "5rem",
        color: "red"
    }
});

// Creating a Custom Directive
module.directive("myFirstDirective", function (){
    return{
        restrict: "EAC",
        template: "<h1>Hello Directive</h1>"
    }
});

// Accessing attribute values from custom directives
module.directive("mySecondDirective", function (){
    return{
        restrict: "E",
        scope: {
            name: "="
        },
        template: "<h1>My Name is {{name}}</h1>"
        
    }
});