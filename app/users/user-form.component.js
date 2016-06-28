System.register(['angular2/core', 'angular2/common', 'rxjs/add/operator/map', './users.service', './validators/name-validators', './validators/email-validators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, users_service_1, name_validators_1, email_validators_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (name_validators_1_1) {
                name_validators_1 = name_validators_1_1;
            },
            function (email_validators_1_1) {
                email_validators_1 = email_validators_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(formBulder, _userService) {
                    this._userService = _userService;
                    this.form = formBulder.group({
                        name: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                name_validators_1.NameValidators.containSpace
                            ])],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                email_validators_1.EmailValidators.mustBeValidFormat
                            ])]
                    });
                }
                UserFormComponent.prototype.isValidForm = function () {
                    if (this.form.valid) {
                        alert('Form Submited');
                    }
                };
                UserFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    var email = this.form.find('email');
                    // check for duplicate emails via userService
                    this._userService.getUsers()
                        .map(function (data) {
                        for (var i = data.length - 1; i >= 0; i--) {
                            if (data[i].email == email.value) {
                                email.setErrors({ mustBeUnique: true });
                            }
                        }
                    }).subscribe(function () { return _this.isValidForm(); });
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'new-user',
                        providers: [users_service_1.UsersService],
                        templateUrl: 'app/users/user-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
// Add dirty tracking when user tries to navigate away
//# sourceMappingURL=user-form.component.js.map