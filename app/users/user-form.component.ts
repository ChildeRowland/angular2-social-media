import { Component, OnInit } from '@angular/core';
import { Control, ControlGroup, FormBuilder, Validators } from '@angular/common';
import { CanDeactivate, Router, RouteParams } from '@angular/router-deprecated';
import 'rxjs/add/operator/map';

import { UsersService } from './users.service';
import { User } from './user';
import { NameValidators } from './validators/name-validators';
import { EmailValidators } from './validators/email-validators';

@Component({
	selector: 'new-user',
	providers: [ UsersService ],
	templateUrl: 'app/users/user-form.component.html'
})

// CanDeactivate
export class UserFormComponent implements OnInit {
	form: ControlGroup;
	title: string;
	submit: string;
	user = new User();

	constructor(
		formBulder: FormBuilder,
		private _router: Router,
		private _routeParams: RouteParams,
		private _userService: UsersService){

		this.form = formBulder.group({
			name: ['', Validators.compose([
				Validators.required,
				NameValidators.containSpace
			])],
			email: ['', Validators.compose([
				Validators.required,
				EmailValidators.mustBeValidFormat
			])],
			phone: [],
			address: formBulder.group({
				street: [],
				city: [],
				zipcode: []
			})
		});
	}

	ngOnInit(){
		var id = this._routeParams.get("id");

		if (!id) {
			this.title = "New User";
			this.submit = "Add";
		} else {
			this._userService.findUser(id)
				.subscribe(res => {
					this.user = res;
					this.title = "Edit User";
					this.submit = "Update";
				}, err => {
					if (err.status == 404) {
						this._router.navigate(['NotFound']);
					}
				});
		}
	}

	// routerCanDeactivate(){
	// 	if (this.form.dirty) {
	// 		return confirm("You have unsaved changes, are you sure you want to navigate away?");
	// 	}
	// 	return true;
	// }

	isValidForm(){
		if ( this.form.valid ) { 
			this._userService.addUser(this.form.value)
				.subscribe(() => {
					//this.form.markAsPristine;
					this._router.navigate(['Users']);
			});
		} 
	}

	onSubmit(){
		if (this.user.id) {
			this._userService.updateUser(this.user)
				.subscribe(() => this.isValidForm());
		} else {
			var email = this.form.find('email');
			// check for duplicate emails via userService
			this._userService.getUsers()
				.map(data => {
					for (var i = data.length - 1; i >= 0; i--) {
						if (data[i].email == email.value) {
							email.setErrors({ mustBeUnique: true });
						}
					}
			}).subscribe(() => this.isValidForm());
		}
	}
}






