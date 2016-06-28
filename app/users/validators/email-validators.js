System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            //import { UsersService } from './../users.service';
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.mustBeValidFormat = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    return valid ? null : { mustBeValidFormat: true };
                };
                return EmailValidators;
            }());
            exports_1("EmailValidators", EmailValidators);
        }
    }
});
//# sourceMappingURL=email-validators.js.map