import {Injectable} from "angular2/core";
import {Router} from "angular2/router";
import {Http, URLSearchParams} from "angular2/http";
import {User} from "../model/dziennik";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthenticationService {

    currentUser: User;

    constructor(private _router: Router,
                private http: Http) {
    }

    getCurrentUser(): User {
        return this.currentUser;
    }

    setCurrentUser(user) {
        this.currentUser = user;
    }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    }

    getUser(login: string): Observable<User> {
        let parametrers = new URLSearchParams();
        parametrers.set("login", login);

        return this.http.get('http://dziennikelektroniczny.herokuapp.com/user',
            {search: parametrers})
            .map(res => res.json());
    }
}