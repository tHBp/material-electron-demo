require([
		'knockout',
		'jquery'
], function (ko, $) {
    'use strict';
    var HomeViewModel = function () {
        var self = this;
        self.componentName = ko.observable('login');
        ko.components.register('login', {
           require: '../components/login/ko/bindings/login-bindings'
        });
    };
    $(document).ready(function () {
        ko.applyBindings(new HomeViewModel());
    });
});