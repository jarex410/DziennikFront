System.register(["../services/teacher.service", 'angular2/core', "../services/authentication.service", "angular2/src/router/router", "../services/main.service"], function(exports_1, context_1) {
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
    var teacher_service_1, core_1, authentication_service_1, router_1, main_service_1;
    var TeacherComponent;
    return {
        setters:[
            function (teacher_service_1_1) {
                teacher_service_1 = teacher_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_service_1_1) {
                main_service_1 = main_service_1_1;
            }],
        execute: function() {
            TeacherComponent = (function () {
                function TeacherComponent(_teacherService, _authenticationServie, _router, mainService) {
                    this._teacherService = _teacherService;
                    this._authenticationServie = _authenticationServie;
                    this._router = _router;
                    this.mainService = mainService;
                    this.classID = "aaa";
                    this.teacher = this.getTeacher;
                    this.mainService.addID("DUPA TEACHER");
                    console.log("KONSTRUKTOR TEACHER");
                }
                TeacherComponent.prototype.clicked = function (event) {
                    this.teachers = [];
                };
                TeacherComponent.prototype.function = function (event) {
                    this.getTeachers();
                };
                TeacherComponent.prototype.goToClassComponent = function () {
                    this._router.navigate(['Class']);
                };
                TeacherComponent.prototype.ngOnInit = function () {
                    this.getTeachers();
                };
                TeacherComponent.prototype.getTeachers = function () {
                    var _this = this;
                    this._teacherService.getTechers()
                        .subscribe(function (data) { return _this.teachers = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
                };
                TeacherComponent.prototype.submitForm = function () {
                    this._teacherService.addTeache(this.teacher);
                };
                TeacherComponent.prototype.postTeacherek = function () {
                    var _this = this;
                    this._teacherService.AddTeacherek()
                        .subscribe(function (data) { return _this.teacher = data; }, function (error) { return alert(error); }, function () { return console.log("POST POSZEDL"); });
                };
                TeacherComponent.prototype.getTeacher = function () {
                    var _this = this;
                    this._authenticationServie.getUser("panJacek")
                        .subscribe(function (data) { return _this.teacher = data; }, function (error) { return alert(error); }, function () { return console.log("GET POSZEDL"); });
                };
                TeacherComponent = __decorate([
                    core_1.Component({
                        selector: 'teacher',
                        template: "\n<table class=\"table\">\n  <tr>\n  <td>PRZEDMIOT</td>\n</tr>\n<tr *ngFor=\"#subject of teacher.subjectList\">\n     <td (click)=\"goToClassComponent()\" *ngFor=\"#class of subject.schoolClasses\"><div>{{class.name}}</div></td>\n\n</tr>\n\n{{classID}}\n<klasa classID={{clasValue}}></klasa>\n  </table>\n  <button (click)=\"function($event)\"> JEDEN</button>\n    <button (click)=\"clicked($event)\"> DWA</button>\n    <button (click)=\"postTeacherek()\"> 3333</button>\n    <button (click)=\"getTeacher()\"> GET TEACHEREK</button>\n{{teacher.subjecList}}\n",
                        providers: [teacher_service_1.TeacherService, authentication_service_1.AuthenticationService, main_service_1.MainService]
                    }), 
                    __metadata('design:paramtypes', [teacher_service_1.TeacherService, authentication_service_1.AuthenticationService, router_1.Router, main_service_1.MainService])
                ], TeacherComponent);
                return TeacherComponent;
            }());
            exports_1("TeacherComponent", TeacherComponent);
        }
    }
});
//# sourceMappingURL=teacher.component.js.map