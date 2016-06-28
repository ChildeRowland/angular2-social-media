import { Control } from 'angular2/common';

export class NameValidators {

	static containSpace(control: Control) {
		if (control.value.indexOf(' ') <= 0) {
			return { containSpace: true };
		}
		return null;
	}
}