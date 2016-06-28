import { Component, OnInit } from 'angular2/core';
import { RouterLink } from 'angular2/router';

import { UsersService } from './users.service';

@Component({
	selector: 'users',
	directives: [ RouterLink ],
	providers: [ UsersService ],
	template: `
		<div>
			<i *ngIf="!users" class="fa fa-spinner fa-spin fa-4x"></i>

			<div *ngIf="users">
				<button class="btn btn-primary" [routerLink]="['NewUser']">
					Add User
				</button>
				<table class="table table-border">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="#user of users">
							<td>{{ user.name }}</td>
							<td>{{ user.email }}</td>
							<td><i class="glyphicon glyphicon-edit"></i></td>
							<td><i class="glyphicon glyphicon-trash"></i></td>
						</tr>
					</tbody>
				</table>
			</div>
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