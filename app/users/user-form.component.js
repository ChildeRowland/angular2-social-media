System.register(['angular2/core', 'angular2/common', 'angular2/router', 'rxjs/add/operator/map', './users.service', './user', './validators/name-validators', './validators/email-validators'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, users_service_1, user_1, name_validators_1, email_validators_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (name_validators_1_1) {
                name_validators_1 = name_validators_1_1;
            },
            function (email_validators_1_1) {
                email_validators_1 = email_validators_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(formBulder, _router, _routeParams, _userService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    this.user = new user_1.User();
                    this.form = formBulder.group({
                        name: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                name_validators_1.NameValidators.containSpace
                            ])],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                email_validators_1.EmailValidators.mustBeValidFormat
                            ])],
                        phone: [],
                        address: formBulder.group({
                            street: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    if (!id) {
                        this.title = "New User";
                        this.submit = "Add";
                    }
                    else {
                        this.title = "Edit User";
                        this.submit = "Update";
                        this._userService.findUser(id)
                            .subscribe(function (res) { return _this.user = res; });
                    }
                };
                // routerCanDeactivate(){
                // 	if (this.form.dirty) {
                // 		return confirm("You have unsaved changes, are you sure you want to navigate away?");
                // 	}
                // 	return true;
                // }
                UserFormComponent.prototype.isValidForm = function () {
                    var _this = this;
                    if (this.form.valid) {
                        this._userService.addUser(this.form.value)
                            .subscribe(function () {
                            //this.form.markAsPristine;
                            _this._router.navigate(['Users']);
                        });
                    }
                };
                UserFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    if (this.user.id) {
                        this._userService.updateUser(this.user)
                            .subscribe(function () { return _this.isValidForm(); });
                    }
                    else {
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
                    }
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'new-user',
                        providers: [users_service_1.UsersService],
                        templateUrl: 'app/users/user-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, router_1.RouteParams, users_service_1.UsersService])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map