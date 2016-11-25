/*(function(){
  'use strict'
  var app = angular.module('LunchCheck',[]);

  app.controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "Hello";
    $scope.items = "";
    $scope.lunchMessage = "";
    $scope.checkTooMuch = function () {
      if ($scope.items === "") {
        $scope.lunchMessage = "Please Enter Data First!";
      }else {
        var arrayOfStrings = splitString($scope.items,',');
        if(arrayOfStrings.length > 3) {
          $scope.lunchMessage = "Too Much!";
        }else {
          $scope.lunchMessage = "Enjoy!";
        }
      }
      return $scope.lunchMessage;
    };
  }
    var splitString = function (string, separator) {
      var arrayOfStrings = string.split(separator);
      return arrayOfStrings;
    }
})();
*/
!function(){"use strict";function b(a){a.message="Hello",a.items="",a.lunchMessage="",a.checkTooMuch=function(){if(""===a.items)a.lunchMessage="Please Enter Data First!";else{var b=c(a.items,",");b.length>3?a.lunchMessage="Too Much!":a.lunchMessage="Enjoy!"}return a.lunchMessage}}var a=angular.module("LunchCheck",[]);a.controller("LunchCheckController",b),b.$inject=["$scope"];var c=function(a,b){var c=a.split(b);return c}}();
