import {Component, Directive} from 'angular2/core';
import {TeacherService} from "./services/teacher.service";
import {Teacher} from "./model/dziennik";
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {LoginComponent} from './components/login.component';
import {PrivateComponent} from './components/private.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TeacherComponent} from "./components/teacher.component";
import {ClassComponent} from "./components/class.component";



@Component({
    selector: 'my-app',
    directives: [LoginComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    template: `
            <router-outlet></router-outlet>
        `
})
@RouteConfig([
    { path: '/home', name: 'Home', component: PrivateComponent},
    { path: '/login', name: 'Login', component: LoginComponent , useAsDefault:true },
    { path: '/teacher', name: 'Teacher', component: TeacherComponent },
    { path: '/class', name: 'Class', component: ClassComponent }
])

export class AppComponent {}
