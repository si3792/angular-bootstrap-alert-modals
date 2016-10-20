"use strict";

var bootstrapAlertModals = angular.module('BootstrapAlertModals', ['angularModalService']);


bootstrapAlertModals.service('AlertModalService', function(ModalService) {

    this.alertTemplate = '<div class=\"modal fade\" data-keyboard=\"true\" tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"modal-title text-{{ctrl.type}} h1 text-center\" style=\' display: inline-flex;vertical-align: middle;align-items: center;justify-content: center;\'>\n                    <span class=\'glyphicon glyphicon-ok-sign\' ng-show=\'ctrl.type == \"success\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-info-sign\' ng-show=\'ctrl.type == \"info\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-exclamation-sign\' ng-show=\'ctrl.type == \"warning\"\'><\/span>\n                    <span class=\'glyphicon glyphicon-remove-sign\' ng-show=\'ctrl.type == \"danger\"\'><\/span>\n                    &nbsp{{ctrl.title}}\n                <\/div>\n            <\/div>\n            <div class=\"modal-body\" ng-hide=\'ctrl.text==\"\"\'>\n                <p>{{ctrl.text}}<\/p>\n            <\/div>\n            <div class=\'modal-footer\'>\n                <div class=\'containter-fluid\'>\n                    <div class=\'col-sm-6 col-sm-offset-3\'>\n                        <button type=\"button\" class=\"btn btn-{{ctrl.type}} btn-block\" ng-click=\"close(false)\" data-dismiss=\"modal\">Close<\/button>\n                    <\/div>\n                <\/div>\n            <\/div>\n        <\/div>\n    <\/div>\n<\/div>\n';

    this.alert = function(title, text, type) {
        ModalService.showModal({
            template: this.alertTemplate,
            controller: function() {
                this.title = title;
                this.text = text;
                this.type = type;
            },
            controllerAs: 'ctrl'
        }).then(function(modal) {
            modal.element.modal({
                keyboard: true
            });
        });
    }

});
