import { Component, OnInit } from 'angular2/core';

import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service';
import { PaginateComponent } from '../shared/paginate.component';
import { MainSpinner } from './../shared/spinner.component';

@Component({
	selector: 'posts',
	directives: [ MainSpinner, PaginateComponent ],
	providers: [ PostsService, UsersService ],
	templateUrl: 'app/posts/posts.component.html',
	styles: [`
		.post:hover {
			background-color: #c8d5e2;
		}
		.select-user {
			margin-bottom: 19px;
		}
	`] 
})

export class PostsComponent implements OnInit {
	posts: any[];
	pagedPosts = [];
	users: any[];
	singlePost: Object;
	singlePostComments: any[];
	commentsLoading = false
	selectedUserId;
	pageSize = 10;

	newArray = []

	constructor(
		private _postsService: PostsService,
		private _userService: UsersService){ 
	}

	ngOnInit(){
		this.loadUsers();
		this.loadPosts();

	}

	// load the posts with optional filter object
	private loadPosts(filter?){
		this._postsService.getPosts(filter)
			.subscribe(res => {
				this.posts = res;
				this.pagedPosts = _.take(this.posts, this.pageSize);	
			}, null);
	}

	private loadUsers(){
		this._userService.getUsers()
			.subscribe(res => this.users = res);
	}

	viewPost(post){
		this.singlePostComments = [];
		this.commentsLoading = true;
		this.singlePost = post;
		this._postsService.getPost(post)
			.subscribe(res => {
				this.singlePostComments = res;
			}, null,
			() => this.commentsLoading = false);
	}

	// change event binding function gets the userId from select element
	selectUser(filter) {
		this.posts = null;
		this.singlePost = null;
		this.singlePostComments = null;

		this.loadPosts(filter);
	}

	changePage(page){
		//console.log(page);
		var startIndex = (page - 1) * this.pageSize;
		var array = _.rest(this.posts, startIndex);
        this.pagedPosts = _.take(array, this.pageSize);
	}
}



