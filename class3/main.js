const MyModule = angular.module("myAppModule",[]);
MyModule.controller("MyController", function($scope){
    $scope.Gender = "male";
    $scope.ans = "yes is a male";
    $scope.MyMovies = ["Lion heart","Dark Tower","SpiderMan","Thor","Bad Guys","karate Kid"];
    $scope.style = {
        color:"orange",
        backgroundColor:"gray"
    }
})