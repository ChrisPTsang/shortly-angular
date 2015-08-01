angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function() {
    Links.post($scope.link)
      .success(function() {
        $location.path('/links')    
      })
      .error(function() {
            
      });
  };  
});
