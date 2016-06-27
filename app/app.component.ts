import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@RouteConfig([
	{ name: 'Home', path: '/', component: HomeComponent, useAsDefault: true },
	{ name: 'Users', path: '/users', component: HomeComponent }
	// { name: 'Posts', path: '/posts' },
	// { name: 'Other', path: '/*other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    directives: [ NavbarComponent, HomeComponent, ROUTER_DIRECTIVES ],
    template: `
		<navbar></navbar>
		<div class="container">
			<h1>A2 socializer</h1>
		</div>
    `
})
export class AppComponent { }