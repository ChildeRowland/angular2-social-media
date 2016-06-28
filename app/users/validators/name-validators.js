System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NameValidators;
    return {
        setters:[],
        execute: function() {
            NameValidators = (function () {
                function NameValidators() {
                }
                NameValidators.containSpace = function (control) {
                    if (control.value.indexOf(' ') <= 0) {
                        return { containSpace: true };
                    }
                    return null;
                };
                return NameValidators;
            }());
            exports_1("NameValidators", NameValidators);
        }
    }
});
//# sourceMappingURL=name-validators.js.map