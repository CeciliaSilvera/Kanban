/// <reference path="../angular.js" />
/// <reference path="../angular-route.js" />

angular.module("baseModule")
    .controller("HomeController", [
        "$scope",
        function ($scope) {
            $scope.title = "Kanban";
        }
    ]);