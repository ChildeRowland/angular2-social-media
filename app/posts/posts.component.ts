import { Component, OnInit } from 'angular2/core';

import { PostsService } from './posts.service';
import { MainSpinner } from './../shared/spinner.component';

@Component({
	selector: 'posts',
	directives: [ MainSpinner ],
	providers: [ PostsService ],
	template: `
		<main-spinner [is-loading]="!posts"></main-spinner>
		<div class="row"
			 *ngIf="posts">
    		<div class="col-md-6 well">
				<ul class="list-group">
	  				<li class="list-group-item"
	  				    *ngFor="#post of posts"
	  				    (click)="viewPost(post)">
	  				    {{ post.title }}
	  				</li>
	  			</ul>
	  		</div>
			<div class="col-md-6">
				<div class="panel panel-default" *ngIf="singlePost.title">
		  			<div class="panel-heading">
							{{ singlePost.title }}
						</div>
		  			<div class="panel-body">
		    			{{ singlePost.body }}
		  			</div>
				</div>
			</div>
		</div>
	`
})

export class PostsComponent implements OnInit {
	posts: any[];
	singlePost: any{};

	constructor(private _postsService: PostsService){}

	ngOnInit(){
		this._postsService.getPosts()
			.subscribe(res => this.posts = res);
	}

	viewPost(post){
		this.singlePost = post;
	}
}