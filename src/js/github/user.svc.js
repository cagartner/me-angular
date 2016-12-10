angular.module('app')
.factory('UserSvc', function ($http) {
  return {
    getUserInfo: function () {
      return $http.get('https://api.github.com/users/cagartner');
    },

    getResumeFromRepo: function () {
      return $http.get('https://raw.githubusercontent.com/cagartner/me/master/README.md');
    }
  }
});
