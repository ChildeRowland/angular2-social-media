import { Component } from 'angular2/core';
import { Control, ControlGroup, FormBuilder, Validators } from 'angular2/common';
import 'rxjs/add/operator/map';

import { UsersService } from './users.service';
import { NameValidators } from './validators/name-validators';
import { EmailValidators } from './validators/email-validators';

@Component({
	selector: 'new-user',
	providers: [ UsersService ],
	templateUrl: 'app/users/user-form.component.html'
})

export class UserFormComponent{
	form: ControlGroup;

	constructor(formBulder: FormBuilder, private _userService: UsersService){
		this.form = formBulder.group({
			name: ['', Validators.compose([
				Validators.required,
				NameValidators.containSpace
			])],
			email: ['', Validators.compose([
				Validators.required,
				EmailValidators.mustBeValidFormat
			])]
		});
	}

	isValidForm(){
		if ( this.form.valid ) {
			alert('Form Submited');
		}
	}

	onSubmit(){
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

// Add dirty tracking when user tries to navigate away





