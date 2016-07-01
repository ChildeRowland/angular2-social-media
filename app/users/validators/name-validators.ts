import { Control } from '@angular/common';

export class NameValidators {

	static containSpace(control: Control) {
		if (control.value.indexOf(' ') <= 0) {
			return { containSpace: true };
		}
		return null;
	}
}