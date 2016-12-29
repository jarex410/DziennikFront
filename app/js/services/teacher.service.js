System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/Rx', 'rxjs/Observable', "angular2/src/http/base_request_options"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, base_request_options_1;
    var TeacherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (base_request_options_1_1) {
                base_request_options_1 = base_request_options_1_1;
            }],
        execute: function() {
            TeacherService = (function () {
                function TeacherService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.headers.append('Accept', 'application/json');
                    this.headers.append('Content-Type', 'application/json');
                    this.headers.append('x-id', '1');
                    this.options = new base_request_options_1.RequestOptions({ headers: this.headers });
                }
                TeacherService.prototype.getTechers = function () {
                    return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher')
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                TeacherService.prototype.getTeacher1 = function (id) {
                    var parametrers = new http_1.URLSearchParams();
                    parametrers.set("id", id);
                    return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher', { search: parametrers })
                        .map(function (res) { return res.json(); });
                }; // leci po ??
                TeacherService.prototype.getTeacher = function (id) {
                    var parametrers = new http_1.URLSearchParams();
                    return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher/' + id)
                        .map(function (res) { return res.json(); });
                }; //leci po urlu
                TeacherService.prototype.addTeache = function (body) {
                    var bodyString = JSON.stringify(body); // Stringify payload
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
                    var options = new base_request_options_1.RequestOptions({ headers: headers }); // Create a request option
                    return this.http.post('http://dziennikelektroniczny.herokuapp.com/teacher', bodyString, options) // ...using post request
                        .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
                        .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
                };
                TeacherService.prototype.AddTeacherek = function () {
                    var toAdd = JSON.stringify({
                        address: "Rzeszow 2",
                        login: "zzzz",
                        name: "zzzz",
                        password: "zzzz",
                        surname: "zzzzz",
                        isEducator: "true"
                    });
                    var params = 'json=' + toAdd;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('http://dziennikelektroniczny.herokuapp.com/teacher', toAdd, { headers: headers })
                        .catch(this.handleError);
                };
                TeacherService.prototype.addTeacher = function (teacher) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    /*
                         var newTeacher = new URLSearchParams();
                        newTeacher.set("name", teacher.name)
                    */
                    return this.http.post('http://dziennikelektroniczny.herokuapp.com/teacher', JSON.stringify(teacher), headers);
                };
                // to avoid breaking the rest of our app
                // I extract the id from the person url
                TeacherService.prototype.extractId = function (personData) {
                    var extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
                    return parseInt(extractedId);
                };
                TeacherService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TeacherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TeacherService);
                return TeacherService;
            }());
            exports_1("TeacherService", TeacherService);
        }
    }
});
//# sourceMappingURL=teacher.service.js.map