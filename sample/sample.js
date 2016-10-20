"use strict";

var app = angular.module('SampleApp', ['BootstrapAlertModals']);

app.controller("sampleController", function($scope, AlertModalService) {

    $scope.testAlert = function() {
        AlertModalService.alert("This is the title");
    }

});
