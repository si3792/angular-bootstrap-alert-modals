"use strict";

var bootstrapAlertModals = angular.module('BootstrapAlertModals', ['angularModalService']);

// Controller for the modal
bootstrapAlertModals.controller('AlertModalController', [
    '$scope', '$element', 'title', 'text', 'type', 'close',
    function($scope, $element, title, text, type, close) {

        $scope.title = title;
        $scope.text = text;
        $scope.type = type;

        $scope.close = function() {
            close(null, 500);
        };


        $scope.focusButton = function() {
            alert('dd');
            console.log('focusing');
            angular.element("#close-button").focus();
        }

        $scope.$on('$viewContentLoaded', function() {
            $scope.focusButton();
        });
    }
]);

// Directive for focusing on a HTML elements, used to focus on the close button after a modal is shown.
bootstrapAlertModals.directive('focusMe', function($timeout) {
    return {
        restrict: 'A',
        link: function($scope, elem, attrs) {
            elem.ready(function() {
                $timeout(function() {
                    elem.focus();
                }, 500);
            })
        }
    }
})

bootstrapAlertModals.service('AlertModalService', function(ModalService, $q, $timeout) {

    var self = this;

    self.alertTemplate = '<div class=\"modal fade\" data-keyboard=\"true\" tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"modal-title text-{{type}} h1 text-center\" style=\' display: inline-flex;vertical-align: middle;align-items: center;justify-content: center;\'>\n                    <span class=\'glyphicon glyphicon-ok-sign\' ng-show=\'type == \"success\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-info-sign\' ng-show=\'type == \"info\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-exclamation-sign\' ng-show=\'type == \"warning\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-remove-sign\' ng-show=\'type == \"danger\"\'><\/span>\n                    &nbsp{{title}}\n                <\/div>\n            <\/div>\n            <div class=\"modal-body\" ng-hide=\'text==\"\"\'>\n                <p>{{text}}<\/p>\n            <\/div>\n            <div class=\'modal-footer\'>\n                <div class=\'containter-fluid\'>\n                    <div class=\'col-sm-6 col-sm-offset-3\'>\n                        <button focus-me type=\"button\" class=\"btn btn-{{type}} btn-block\" ng-click=\"close()\" data-dismiss=\"modal\" id="close-button">Close<\/button>\n                    <\/div>\n                <\/div>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div>';

    self.modalOpened = false;

    self.alert = function(title, text, type) {
        var deferred = $q.defer();

        ModalService.showModal({
            template: self.alertTemplate,
            controller: 'AlertModalController',
            inputs: {
                title: title,
                text: text,
                type: type
            }
        }).then(function(modal) {

            if (self.modalOpened == true) {
                $timeout(function() {
                    deferred.reject("Only one modal can be opened at the same time!")
                }, 50);
                return deferred.promise;
            }
            self.modalOpened = true;

            modal.element.modal({
                keyboard: false
            });

            modal.close.then(function(result) {
                self.modalOpened = false;
                deferred.resolve();
            });
        }).catch(function(error) {
            self.modalOpened = false;
            deferred.reject(error);
        });

        return deferred.promise;
    }

});
