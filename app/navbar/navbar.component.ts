import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, RouterLink } from 'angular2/router';

@Component({
	selector: 'navbar',
	directives: [ ROUTER_DIRECTIVES, RouterLink ],
	templateUrl: 'app/navbar/navbar.component.html'
})

export class NavbarComponent {
	

}