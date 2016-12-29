System.register(["../services/teacher.service", 'angular2/core'], function(exports_1, context_1) {
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
    var teacher_service_1, core_1;
    var TeacherComponent;
    return {
        setters:[
            function (teacher_service_1_1) {
                teacher_service_1 = teacher_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TeacherComponent = (function () {
                function TeacherComponent(_teacherService) {
                    this._teacherService = _teacherService;
                }
                TeacherComponent.prototype.clicked = function (event) {
                    this.teachers = [];
                };
                TeacherComponent.prototype.function = function (event) {
                    this.getTeachers();
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
                TeacherComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<table class=\"table\">\n  <tr>\n  <td>IMIE</td><td>NAZWISKO</td>\n</tr>\n      <tr *ngFor=\"#teacher of teachers\">\n      <td>{{ teacher.name }}  </td><td>  {{teacher.surname}}</td>\n      </tr>\n  </table>\n  <button (click)=\"function($event)\"> JEDEN</button>\n    <button (click)=\"clicked($event)\"> DWA</button>\n    <button (click)=\"postTeacherek()\"> 3333</button>\n\n",
                        providers: [teacher_service_1.TeacherService]
                    }), 
                    __metadata('design:paramtypes', [teacher_service_1.TeacherService])
                ], TeacherComponent);
                return TeacherComponent;
            }());
            exports_1("TeacherComponent", TeacherComponent);
        }
    }
});
//# sourceMappingURL=test.componsent.js.map