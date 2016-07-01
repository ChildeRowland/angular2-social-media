import {Component} from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './404/not-found.component';

@RouteConfig([
	{ name: 'Home', path: '/', component: HomeComponent, useAsDefault: true },
	{ name: 'Users', path: '/users', component: UsersComponent },
	{ name: 'NewUser', path: '/users/new', component: UserFormComponent },
	{ name: 'EditUser', path: '/users/:id', component: UserFormComponent },
	{ name: 'Posts', path: '/posts', component: PostsComponent },
	{ name: 'NotFound', path: '/404', component: NotFoundComponent },
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





