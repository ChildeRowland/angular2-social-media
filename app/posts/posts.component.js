System.register(['angular2/core', './posts.service', '../users/users.service', '../shared/paginate.component', './../shared/spinner.component'], function(exports_1, context_1) {
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
    var core_1, posts_service_1, users_service_1, paginate_component_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (paginate_component_1_1) {
                paginate_component_1 = paginate_component_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _userService) {
                    this._postsService = _postsService;
                    this._userService = _userService;
                    this.pagedPosts = [];
                    this.commentsLoading = false;
                    this.pageSize = 10;
                    this.newArray = [];
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                    this.loadPosts();
                };
                // load the posts with optional filter object
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this._postsService.getPosts(filter)
                        .subscribe(function (res) {
                        _this.posts = res;
                        _this.pagedPosts = _.take(_this.posts, _this.pageSize);
                    }, null);
                };
                PostsComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (res) { return _this.users = res; });
                };
                PostsComponent.prototype.viewPost = function (post) {
                    var _this = this;
                    this.singlePostComments = [];
                    this.commentsLoading = true;
                    this.singlePost = post;
                    this._postsService.getPost(post)
                        .subscribe(function (res) {
                        _this.singlePostComments = res;
                    }, null, function () { return _this.commentsLoading = false; });
                };
                // change event binding function gets the userId from select element
                PostsComponent.prototype.selectUser = function (filter) {
                    this.posts = null;
                    this.singlePost = null;
                    this.singlePostComments = null;
                    this.loadPosts(filter);
                };
                PostsComponent.prototype.changePage = function (page) {
                    //console.log(page);
                    var startIndex = (page - 1) * this.pageSize;
                    var array = _.rest(this.posts, startIndex);
                    this.pagedPosts = _.take(array, this.pageSize);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        directives: [spinner_component_1.MainSpinner, paginate_component_1.PaginateComponent],
                        providers: [posts_service_1.PostsService, users_service_1.UsersService],
                        templateUrl: 'app/posts/posts.component.html',
                        styles: ["\n\t\t.post:hover {\n\t\t\tbackground-color: #c8d5e2;\n\t\t}\n\t\t.select-user {\n\t\t\tmargin-bottom: 19px;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map