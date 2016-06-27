import { Component, OnInit } from 'angular2/core';

import { UsersService } from './users.service';

@Component({
	selector: 'users',
	providers: [ UsersService ],
	template: `
		<div>
			{{ users | json }}
		</div>
	`
})

export class UsersComponent implements OnInit{
	users;

	constructor(private _usersService: UsersService) {

	}

	ngOnInit() {
		this._usersService.getUsers()
			.subscribe(data => this.users = data);
	}
}