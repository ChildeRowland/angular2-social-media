import { Injectable }  from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/observable';
import  'rxjs/add/operator/map';

@Injectable()
export class PostsService {
	url = "http://jsonplaceholder.typicode.com/posts";

	constructor(private _http: Http){

	}

	getPosts(){
		return this._http.get(this.url).map(res => res.json());
	}

	getPost(post){
		return this._http.get(`${this.url}/${post.id}/comments`)
			.map(res => res.json());
	}
}