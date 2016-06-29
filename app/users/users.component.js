System.register(['angular2/core', 'angular2/router', './users.service'], function(exports_1, context_1) {
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
    var core_1, router_1, users_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_usersService) {
                    this._usersService = _usersService;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._usersService.getUsers()
                        .subscribe(function (data) { return _this.users = data; });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    var idx = this.users.indexOf(user);
                    if (confirm('Delete ' + user.name + "?")) {
                        this.users.splice(idx, 1);
                        this._usersService.deleteUser(user)
                            .subscribe(function () { return console.log(user); }, function (err) {
                            alert('User couldn\'t be deleted');
                            _this.users.splice(idx, 0, user);
                        });
                    }
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        directives: [router_1.RouterLink],
                        providers: [users_service_1.UsersService],
                        template: "\n\t\t<div>\n\t\t\t<i *ngIf=\"!users\" class=\"fa fa-spinner fa-spin fa-4x\"></i>\n\n\t\t\t<div *ngIf=\"users\">\n\t\t\t\t<button class=\"btn btn-primary\" [routerLink]=\"['NewUser']\">\n\t\t\t\t\tAdd User\n\t\t\t\t</button>\n\t\t\t\t<table class=\"table table-border\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t<th>Email</th>\n\t\t\t\t\t\t\t<th>Edit</th>\n\t\t\t\t\t\t\t<th>Delete</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"#user of users\">\n\t\t\t\t\t\t\t<td>{{ user.name }}</td>\n\t\t\t\t\t\t\t<td>{{ user.email }}</td>\n\t\t\t\t\t\t\t<td><a [routerLink]=\"['EditUser', { id: user.id }]\">\n\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-edit\"></i>\n\t\t\t\t\t\t\t</a></td>\n\t\t\t\t\t\t\t<td><a (click)=\"deleteUser(user)\">\n\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-trash\"></i>\n\t\t\t\t\t\t\t</a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t",
                        styles: ["\n\t\t.glyphicon-trash{\n\t\t\tcursor: pointer;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map