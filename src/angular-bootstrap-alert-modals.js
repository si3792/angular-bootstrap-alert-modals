"use strict";

var bootstrapAlertModals = angular.module('BootstrapAlertModals', []);


bootstrapAlertModals.service('AlertModalService', function() {

    this.alert = function(title) {
        alert(title);
    }

});
