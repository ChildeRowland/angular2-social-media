import { Control } from '@angular/common';
//import { UsersService } from './../users.service';

export class EmailValidators {
	
	static mustBeValidFormat(control: Control) {
		var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var valid = regEx.test(control.value);
		return valid ? null : { mustBeValidFormat: true};
	}
}
