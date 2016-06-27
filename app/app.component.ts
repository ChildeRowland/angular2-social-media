import {Component} from 'angular2/core';

import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'my-app',
    directives: [ NavbarComponent ],
    template: `
		<navbar></navbar>
		<div class="container">
			<h1>A2 socializer</h1>
		</div>
    `
})
export class AppComponent { }