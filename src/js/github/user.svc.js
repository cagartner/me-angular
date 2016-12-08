angular.module('app')
.factory('UserSvc', function ($http) {
  return {
    fetchStories: function () {
      return $http.get('https://api.github.com/users/cagartner');
    }
  }
});
