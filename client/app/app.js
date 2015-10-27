var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .otherwise('/', {
            templateUrl : 'template/SignIn.html',
            controller  : 'SignInCtrl'
        })

        .when('/signIn', {
            templateUrl : 'template/SignIn.html',
            controller  : 'SignInCtrl'
        })

        // route for the about page
        .when('/register', {
            templateUrl : 'template/Register.html',
            controller  : 'RegisterCtrl'
        })

        // route for the contact page
        .when('/content', {
            templateUrl : 'pages/Content.html',
            controller  : 'ContentCtrl'
        });
});

app.controller('RegisterCtrl',['$scope','$location', RegisterCtrl ]);

app.controller('SignInCtrl', ['$scope','$location',SignInCtrl]);

app.controller('ContentCtrl', ['$scope','$location',ContentCtrl]);
