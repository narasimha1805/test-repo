(function(){
  'use strict'
  app.controller('NameCalController',function($scope){
    $scope.name = "";
    $scope.nameValue = 0;

    $scope.displayNumeric = function() {
      var totalNameValue = calNumericForString($scope.name);
      $scope.nameValue = totalNameValue;
    };

    function calNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    };
  });

})();
