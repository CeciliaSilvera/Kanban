/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("MainController", [
        "$scope",
        "$routeParams",
        "$route",
        "$location",
        function ($scope, $routeParams, $route, $location) {

            $scope.$route = $route;

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);