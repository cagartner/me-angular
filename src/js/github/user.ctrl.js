angular.module('app')
    .controller('UserCtrl', function ($scope, UserSvc) {
        // Get info of user
        UserSvc.getUserInfo().then(function (users) {
            $scope.user = users.data;
            console.log(users.data);

            // Remove loader
            setTimeout(function () {
                $('.loader').fadeOut();
                $('.page').delay(800).fadeIn('slow');
            }, 2000);
        });

        // Get my resume
        UserSvc.getResumeFromRepo().then(function (transport) {
            $scope.resume = transport.data;
        });
    });
