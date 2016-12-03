System.register(['angular2/core', "./services/teacher.service", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, teacher_service_1, http_1;
    var any, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (teacher_service_1_1) {
                teacher_service_1 = teacher_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_teacherService) {
                    this._teacherService = _teacherService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getTeachers();
                };
                AppComponent.prototype.getTeachers = function () {
                    var _this = this;
                    this._teacherService.getTechers()
                        .subscribe(function (data) { return _this.teachers = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <ul>\n      <li *ngFor=\"#teacher of teachers\">{{teacher.name}}</li>\n    </ul>\n  ",
                        providers: [http_1.HTTP_PROVIDERS, teacher_service_1.TeacherService]
                    }), 
                    __metadata('design:paramtypes', [teacher_service_1.TeacherService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map