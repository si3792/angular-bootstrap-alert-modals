"use strict";

var bootstrapAlertModals = angular.module('BootstrapAlertModals', ['angularModalService']);

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

bootstrapAlertModals.directive( 'focusMe', function($timeout) {
   return {
       restrict: 'A',
       link: function( $scope, elem, attrs ) {
          elem.ready(function(){
              console.log(element);
              $timeout( function(){
                elem.focus();
              }, 150);
          })
       }
    }
})

bootstrapAlertModals.service('AlertModalService', function(ModalService, $q) {

    this.alertTemplate = '<div class=\"modal fade\" data-keyboard=\"true\" tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"modal-title text-{{type}} h1 text-center\" style=\' display: inline-flex;vertical-align: middle;align-items: center;justify-content: center;\'>\n                    <span class=\'glyphicon glyphicon-ok-sign\' ng-show=\'type == \"success\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-info-sign\' ng-show=\'type == \"info\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-exclamation-sign\' ng-show=\'type == \"warning\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-remove-sign\' ng-show=\'type == \"danger\"\'><\/span>\n                    &nbsp{{title}}\n                <\/div>\n            <\/div>\n            <div class=\"modal-body\" ng-hide=\'text==\"\"\'>\n                <p>{{text}}<\/p>\n            <\/div>\n            <div class=\'modal-footer\'>\n                <div class=\'containter-fluid\'>\n                    <div class=\'col-sm-6 col-sm-offset-3\'>\n                        <button focus-me type=\"button\" class=\"btn btn-{{type}} btn-block\" ng-click=\"close()\" data-dismiss=\"modal\" id="close-button">Close<\/button>\n                    <\/div>\n                <\/div>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div>';

    this.alert = function(title, text, type) {

        var deferred = $q.defer();

        ModalService.showModal({
            template: this.alertTemplate,
            controller: 'AlertModalController',
            inputs: {
                title: title,
                text: text,
                type: type
            }
        }).then(function(modal) {
            modal.element.modal({
                keyboard: false
            });

            modal.closed.then(function(result) {
                deferred.resolve();
            });
        });

        return deferred.promise;
    }

});
