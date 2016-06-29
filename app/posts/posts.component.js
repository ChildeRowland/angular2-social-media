System.register(['angular2/core', './posts.service', './../shared/spinner.component'], function(exports_1, context_1) {
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
    var core_1, posts_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService) {
                    this._postsService = _postsService;
                    this.singlePost = {};
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postsService.getPosts()
                        .subscribe(function (res) { return _this.posts = res; });
                };
                PostsComponent.prototype.viewPost = function (post) {
                    this.singlePost = post;
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        directives: [spinner_component_1.MainSpinner],
                        providers: [posts_service_1.PostsService],
                        template: "\n\t\t<main-spinner [is-loading]=\"!posts\"></main-spinner>\n\t\t<div class=\"row\"\n\t\t\t *ngIf=\"posts\">\n    \t\t<div class=\"col-md-6 well\">\n\t\t\t\t<ul class=\"list-group\">\n\t  \t\t\t\t<li class=\"list-group-item\"\n\t  \t\t\t\t    *ngFor=\"#post of posts\"\n\t  \t\t\t\t    (click)=\"viewPost(post)\">\n\t  \t\t\t\t    {{ post.title }}\n\t  \t\t\t\t</li>\n\t  \t\t\t</ul>\n\t  \t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-default\" *ngIf=\"singlePost.title\">\n\t\t  \t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t{{ singlePost.title }}\n\t\t\t\t\t\t</div>\n\t\t  \t\t\t<div class=\"panel-body\">\n\t\t    \t\t\t{{ singlePost.body }}\n\t\t  \t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map