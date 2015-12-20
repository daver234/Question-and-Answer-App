var questions = angular.module('questions', ['ngRoute']);

questions.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'partials/home.html'
            })
            .when('/new_question',{
                templateUrl: 'partials/new_question.html'
            })
            .when('/question/:id',{
                templateUrl: 'partials/question.html'
            })
            .when('/question/:id/new_answer',{
                templateUrl: 'partials/new_answer.html'
            })
            .when('/logout',{
                redirectTo: '/'
            })
           
            .otherwise({
              redirectTo: '/'
            });
        });
var questions_array = [];