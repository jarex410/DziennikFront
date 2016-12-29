System.register(["angular2/core", "angular2/router", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, router_1, http_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(_router, http) {
                    this._router = _router;
                    this.http = http;
                }
                AuthenticationService.prototype.logout = function () {
                    localStorage.removeItem("user");
                    this._router.navigate(['Login']);
                };
                AuthenticationService.prototype.login = function (user) {
                    var authenticatedUser = this.getUser(user.login);
                    console.log("SERWISE " + user.login);
                    console.log("SUKCES");
                    console.log("CURENT " + authenticatedUser.toString());
                    if (authenticatedUser) {
                        localStorage.setItem("user", authenticatedUser.toString());
                        this._router.navigate(['Home']);
                        return true;
                    }
                    return false;
                };
                AuthenticationService.prototype.checkCredentials = function () {
                    if (localStorage.getItem("user.ts") === null) {
                        this._router.navigate(['Login']);
                    }
                };
                AuthenticationService.prototype.getUser = function (login) {
                    var parametrers = new http_1.URLSearchParams();
                    parametrers.set("login", login);
                    return this.http.get('http://dziennikelektroniczny.herokuapp.com/user', { search: parametrers })
                        .map(function (res) { return res.json(); });
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map