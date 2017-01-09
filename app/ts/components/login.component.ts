import {Component} from "angular2/core";
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../model/dziennik";
import {Router} from "angular2/src/router/router";

@Component({
    selector: 'login-form',
    template: `
        <div class="container" >
            <div class="title">
                Welcome
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.login" id="email" 
                            type="text" class="validate">
                        <label for="login">Login</label>
                    </div>
                </div>
 
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
 
                <span>{{errorMsg}}</span>
                <button (click)="login($event)" 
                    class="btn waves-effect waves-light" 
                    type="submit" name="action">Login</button>
            </div>
        </div>
        {{currentUser.password}}
        {{currentUser.teacher}}
    	`
})

export class LoginComponent {

    public user = new User(null, '', '', null, null, null);
    public errorMsg = '';
    private currentUser = new User(null, '', '', null, null, null);

    constructor(private _router: Router,
                private _authenticationService: AuthenticationService) {
    }

    login(event) {
        event.stopPropagation();
        this.getUser();
        if (this.currentUser.password != this.user.password
            && this.currentUser.login != this.user.password) {
            this.errorMsg = 'fail';
        } else {
            if (this.currentUser.teacher) {
                this.errorMsg = 'SUKCES + nauczyciel';
                this._router.navigate(['Teacher']);
            } else {
                this.errorMsg = 'SUKCES + uczen';
                this._router.navigate(['Student']);
            }
        }
    }

    getUser() {
        this._authenticationService.getUser(this.user.login)
            .subscribe((data: User)=>this.currentUser = data,
                error => alert(error),
                ()=>console.log("GET NA USERA OISZEDK"))
        this._authenticationService.setCurrentUser(this.currentUser);
    }

    getCurentUser() {
        return this.currentUser;
    }
}