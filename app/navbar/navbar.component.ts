import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouterLink } from '@angular/router-deprecated';

@Component({
	selector: 'navbar',
	directives: [ ROUTER_DIRECTIVES, RouterLink ],
	templateUrl: 'app/navbar/navbar.component.html'
})

export class NavbarComponent {
	constructor(private _router: Router){
	}

	isActive(instruction: any[]): boolean {
		return this._router.isRouteActive(this._router.generate(instruction));
	}
}