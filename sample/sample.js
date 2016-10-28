"use strict";

var app = angular.module('SampleApp', ['BootstrapAlertModals']);

app.controller("sampleController", function($scope, AlertModalService) {

    $scope.alertData = {
        title: "Default title",
        text: "One line of text, Second line of text",
        type: 'info'
    };

    $scope.generateAlert = function() {
        AlertModalService.alert($scope.alertData.title, $scope.alertData.text.split(','), $scope.alertData.type).then(
            function() {
                console.log("Model closed!");
            }
        );
    }

});
