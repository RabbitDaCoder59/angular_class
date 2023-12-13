const appModule = angular.module("appModule", []);
appModule.controller("appController", function($scope) {
    $scope.myName = "Edeh Chinedu Daniel"
    $scope.Person = [{firstname:'edeh', lastname:'chinedu'}, {firstname:'christian',lastname:'Daniel'},{firstname:'godson',lastname:'somadina'}];
    $scope.hideElement= true;
    $scope.num1= 20;
    $scope.num2 = 40;
})



