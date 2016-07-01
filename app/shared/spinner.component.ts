import { Component, Input } from '@angular/core';

@Component({
	selector: 'main-spinner',
	template: '<i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-4x"></i>'
})

export class MainSpinner {
	@Input('is-loading') isLoading;
}