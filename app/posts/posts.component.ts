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
				<ul class="list-group" *ngFor="#post of posts">
	  				<li class="list-group-item">{{ post.title }}</li>
	  			</ul>
	  		</div>
		</div>
	`
})

export class PostsComponent implements OnInit {
	posts: any[];

	constructor(private _postsService: PostsService){}

	ngOnInit(){
		this._postsService.getPosts()
			.subscribe(res => this.posts = res);
	}
}