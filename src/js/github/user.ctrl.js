angular.module('app')
    .controller('UserCtrl', function ($scope, UserSvc) {
        var usersData = UserSvc.fetchStories().then(function (users) {
            $scope.user = users.data;
            console.log(users.data);

            setTimeout(function () {
                $('.loader').fadeOut();
                $('.page').delay(800).fadeIn('slow');
            }, 2000);
        });
    });
