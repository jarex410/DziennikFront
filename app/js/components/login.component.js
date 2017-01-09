System.register(["angular2/core", "../services/authentication.service", "../model/dziennik", "angular2/src/router/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1, dziennik_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (dziennik_1_1) {
                dziennik_1 = dziennik_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, _authenticationService) {
                    this._router = _router;
                    this._authenticationService = _authenticationService;
                    this.user = new dziennik_1.User(null, '', '', null, null, null);
                    this.errorMsg = '';
                    this.currentUser = new dziennik_1.User(null, '', '', null, null, null);
                }
                LoginComponent.prototype.login = function (event) {
                    event.stopPropagation();
                    this.getUser();
                    if (this.currentUser.password != this.user.password
                        && this.currentUser.login != this.user.password) {
                        this.errorMsg = 'fail';
                    }
                    else {
                        if (this.currentUser.teacher) {
                            this.errorMsg = 'SUKCES + nauczyciel';
                            this._router.navigate(['Teacher']);
                        }
                        else {
                            this.errorMsg = 'SUKCES + uczen';
                            this._router.navigate(['Student']);
                        }
                    }
                };
                LoginComponent.prototype.getUser = function () {
                    var _this = this;
                    this._authenticationService.getUser(this.user.login)
                        .subscribe(function (data) { return _this.currentUser = data; }, function (error) { return alert(error); }, function () { return console.log("GET NA USERA OISZEDK"); });
                    this._authenticationService.setCurrentUser(this.currentUser);
                };
                LoginComponent.prototype.getCurentUser = function () {
                    return this.currentUser;
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        template: "\n        <div class=\"container\" >\n            <div class=\"title\">\n                Welcome\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.login\" id=\"email\" \n                            type=\"text\" class=\"validate\">\n                        <label for=\"login\">Login</label>\n                    </div>\n                </div>\n \n                <div class=\"row\">\n                    <div class=\"input-field col s12\">\n                        <input [(ngModel)]=\"user.password\" id=\"password\" \n                            type=\"password\" class=\"validate\">\n                        <label for=\"password\">Password</label>\n                    </div>\n                </div>\n \n                <span>{{errorMsg}}</span>\n                <button (click)=\"login($event)\" \n                    class=\"btn waves-effect waves-light\" \n                    type=\"submit\" name=\"action\">Login</button>\n            </div>\n        </div>\n        {{currentUser.password}}\n        {{currentUser.teacher}}\n    \t"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map