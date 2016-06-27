import {Component} from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

@RouteConfig([
	{ name: 'Home', path: '/', component: HomeComponent, useAsDefault: true },
	{ name: 'Users', path: '/users', component: UsersComponent },
	{ name: 'Posts', path: '/posts', component: PostsComponent },
	{ name: 'Other', path: '/*other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    directives: [ NavbarComponent, HomeComponent, RouterOutlet ],
    template: `
		<navbar></navbar>
		<div class="container">
			<h1>A2 socializer</h1>
			<router-outlet></router-outlet>
		</div>
    `
})
export class AppComponent {

}





