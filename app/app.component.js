System.register(['@angular/core', '@angular/router-deprecated', './navbar/navbar.component', './home/home.component', './users/users.component', './users/user-form.component', './posts/posts.component', './404/not-found.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, navbar_component_1, home_component_1, users_component_1, user_form_component_1, posts_component_1, not_found_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        { name: 'Home', path: '/', component: home_component_1.HomeComponent, useAsDefault: true },
                        { name: 'Users', path: '/users', component: users_component_1.UsersComponent },
                        { name: 'NewUser', path: '/users/new', component: user_form_component_1.UserFormComponent },
                        { name: 'EditUser', path: '/users/:id', component: user_form_component_1.UserFormComponent },
                        { name: 'Posts', path: '/posts', component: posts_component_1.PostsComponent },
                        { name: 'NotFound', path: '/404', component: not_found_component_1.NotFoundComponent },
                        { name: 'Other', path: '/*other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [navbar_component_1.NavbarComponent, home_component_1.HomeComponent, router_deprecated_1.RouterOutlet],
                        template: "\n\t\t<navbar></navbar>\n\t\t<div class=\"container\">\n\t\t\t<h1>A2 socializer</h1>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map