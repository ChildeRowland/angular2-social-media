import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService {
	private _url = "http://jsonplaceholder.typicode.com/users";

	constructor(private _http: Http) {

	}

	getUsers(){
		return this._http.get(this._url).map(res => res.json());
	}

	addUser(user: User){
		return this._http.post(this._url, JSON.stringify(user))
			.map(res => res.json());
	}

	findUser(id){
		return this._http.get(this.getUserUrl(id))
			.map(res => res.json()); 
	}

	updateUser(user){
		return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
			.map(res => res.json());
	}

	deleteUser(user){
		return this._http.delete(this.getUserUrl(user.id))
			.map(res => res.json());
	}

	private getUserUrl(id){
		return this._url + "/" + id;
	}
}