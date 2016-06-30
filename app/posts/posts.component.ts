import { Component, OnInit } from 'angular2/core';

import { PostsService } from './posts.service';
import { MainSpinner } from './../shared/spinner.component';

@Component({
	selector: 'posts',
	directives: [ MainSpinner ],
	providers: [ PostsService ],
	templateUrl: 'app/posts/posts.component.html',
	styles: [`
		.post:hover {
			background-color: #c8d5e2;
		}
	`] 
})

export class PostsComponent implements OnInit {
	posts: any[];
	singlePost: any{};
	singlePostComments: any[];

	constructor(private _postsService: PostsService){}

	ngOnInit(){
		this._postsService.getPosts()
			.subscribe(res => this.posts = res);
	}

	viewPost(post){
		this.singlePost = post;
		this._postsService.getPost(post)
			.subscribe(res => this.singlePostComments = res);
	}
}