import { Component, OnInit } from 'angular2/core';
import { RouterLink } from 'angular2/router';
import { Observable } from 'rxjs/observable';

import { UsersService } from './users.service';
import { MainSpinner } from './../shared/spinner.component';

@Component({
	selector: 'users',
	directives: [ RouterLink, MainSpinner ],
	providers: [ UsersService ],
	template: `
		<div>
			<main-spinner [is-loading]="!users"></main-spinner>

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
							<td><a [routerLink]="['EditUser', { id: user.id }]">
								<i class="glyphicon glyphicon-edit"></i>
							</a></td>
							<td><a (click)="deleteUser(user)">
								<i class="glyphicon glyphicon-trash"></i>
							</a></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	`,
	styles: [`
		.glyphicon-trash{
			cursor: pointer;
		}
	`]
})

export class UsersComponent implements OnInit{
	users;

	constructor(private _usersService: UsersService) {

	}

	ngOnInit() {
		this._usersService.getUsers()
			.subscribe(data => this.users = data);
	}

	deleteUser(user){
		var idx = this.users.indexOf(user);

		if (confirm('Delete ' + user.name + "?")) {
			this.users.splice(idx, 1);
			this._usersService.deleteUser(user)
			.subscribe(() => console.log(user),
				err => {
					alert('User couldn\'t be deleted');
					this.users.splice(idx, 0, user);
				});
		}
	}
}



