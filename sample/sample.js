"use strict";

var app = angular.module('SampleApp', ['BootstrapAlertModals']);

app.controller("sampleController", function($scope, AlertModalService) {

    $scope.alertData = {
        title: "Default title",
        text: "Default text",
        type: 'info'
    };

    $scope.generateAlert = function() {
        AlertModalService.alert($scope.alertData.title, $scope.alertData.text, $scope.alertData.type).then(
            function() {
                console.log("Model closed!");
            }
        );
    }

});
