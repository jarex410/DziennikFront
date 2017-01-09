import {Component} from "angular2/core";
import {Teacher} from "./model/dziennik";
import {HTTP_PROVIDERS} from "angular2/http";
import {LoginComponent} from "./components/login.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {TeacherComponent} from "./components/teacher.component";
import {StudentComponent} from "./components/student.component";


@Component({
    selector: 'my-app',
    directives: [LoginComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    template: `
            <router-outlet></router-outlet>
        `
})
@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
    {path: '/teacher', name: 'Teacher', component: TeacherComponent},
    {path: '/student', name: 'Student', component: StudentComponent}
])

export class AppComponent {
}
