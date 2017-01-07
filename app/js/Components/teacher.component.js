System.register(["../services/teacher.service", "../model/dziennik", "angular2/core", "../services/authentication.service"], function(exports_1, context_1) {
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
    var teacher_service_1, dziennik_1, core_1, authentication_service_1;
    var TeacherComponent;
    return {
        setters:[
            function (teacher_service_1_1) {
                teacher_service_1 = teacher_service_1_1;
            },
            function (dziennik_1_1) {
                dziennik_1 = dziennik_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            TeacherComponent = (function () {
                function TeacherComponent(_teacherService, _authenticationServie) {
                    this._teacherService = _teacherService;
                    this._authenticationServie = _authenticationServie;
                    this.teacher = this.getTeacher;
                    this.newGrades = '';
                    this.studentsWithGradesAsSting = [];
                }
                TeacherComponent.prototype.ngOnInit = function () {
                    this.currentUser = this._authenticationServie.getCurrentUser();
                    this.teacherID = this.currentUser.id;
                    this.getSubjectsByTeacher();
                };
                TeacherComponent.prototype.getTeachers = function () {
                    var _this = this;
                    this._teacherService.getTechers()
                        .subscribe(function (data) { return _this.teachers = data; }, function (error) { return console.log(error); }, function () { return console.log('Get all Items complete'); });
                };
                TeacherComponent.prototype.postTeacherek = function () {
                    this._teacherService.postTeacher()
                        .subscribe(function (error) { return alert(error); }, function () { return console.log("POST POSZEDL"); });
                };
                TeacherComponent.prototype.getTeacher = function () {
                    var _this = this;
                    this._authenticationServie.getUser("panJacek")
                        .subscribe(function (data) { return _this.teacher = data; }, function (error) { return alert(error); }, function () { return console.log("GET POSZEDL"); });
                };
                TeacherComponent.prototype.getSubjectList = function (teacherID) {
                    var _this = this;
                    this._teacherService.getSubjectsByTeacherId(teacherID)
                        .subscribe(function (data) { return _this.subjectList = data; }, function (error) { return alert(error); }, function () { return console.log("LISTA PRZEDMIOTOW UZYTKOWNIKA"); });
                };
                TeacherComponent.prototype.getSubjectsByTeacher = function () {
                    console.log("getSUBJECT AJAX");
                    this.getSubjectList(this.teacherID);
                    console.log("getSUBJECT");
                    this.tableData = this.subjectList;
                };
                TeacherComponent.prototype.getTeachers2 = function () {
                    console.log("getTeachers");
                    this.tableData = this.teachers;
                };
                TeacherComponent.prototype.getSubjectById = function (subjectID) {
                    var _this = this;
                    this.resetValues();
                    this.curentSubjectID = subjectID;
                    this._teacherService.getSubjectById(subjectID)
                        .subscribe(function (data) { return _this.subject = data; }, function (error) { return alert(error); }, function () { return console.log("PRZEDMIOT PO ID"); });
                };
                TeacherComponent.prototype.getStudentListByClassId = function (classID) {
                    var _this = this;
                    this._teacherService.getStudentsByClassId(classID)
                        .subscribe(function (data) { return _this.studentList = data; }, function (error) { return alert(error); }, function () { return console.log("LISTA UCZNIOW KLASY" + _this.studentList.toString()); });
                };
                TeacherComponent.prototype.getStudentsWithGradesByClassId = function (classID) {
                    var _this = this;
                    this._teacherService.getStudentsWithGradesByClassId(classID, this.curentSubjectID)
                        .subscribe(function (data) { return _this.studentsWithGradesList = data; }, function (error) { return alert(error); }, function () { return console.log("LISTA UCZNIOW KLASY z ocenami" + _this.studentsWithGradesList.toString()); });
                    this.getGradesAsString();
                };
                TeacherComponent.prototype.getGradesAsString = function () {
                    var _this = this;
                    this.studentsWithGradesList.forEach(function (element) {
                        var index = 0;
                        var grades = element.grades;
                        var gradesAsString = '';
                        grades.forEach(function (grade) {
                            gradesAsString += grade.gradeValue + ', ';
                        });
                        element.gradesAsString = gradesAsString;
                        _this.studentsWithGradesAsSting.push(_this.studentsWithGradesList[index] = element);
                        index += 1;
                    });
                };
                TeacherComponent.prototype.resetValues = function () {
                    this.studentList = [];
                    this.studentsWithGradesList = [];
                    this.studentsWithGradesAsSting = [];
                    console.log("RESET");
                };
                TeacherComponent.prototype.dodajOCeny = function (event, studentID) {
                    var target = event.target || event.srcElement || event.currentTarget;
                    var value = target.parentElement.firstElementChild.value;
                    var pom = value.split(',');
                    var grade = new dziennik_1.Grade(studentID[0], this.curentSubjectID[0], pom, null, null);
                    console.log("GRADE        " + grade.toString());
                    this._teacherService.addGradesToStudent(grade)
                        .subscribe(function (error) { return alert(error); }, function () { return console.log("POST POSZEDL z ocenami"); });
                    this.newGrades = '';
                };
                TeacherComponent = __decorate([
                    core_1.Component({
                        selector: 'teacher',
                        template: "\n<table class=\"table\">\n  <tr>\n  <td>WITAJ {{currentUser.name}} ___ {{currentUser.surname}}</td>\n</tr>\n<tr *ngFor=\"#object of tableData\">\n{{object.id}}\n     <td>{{object.name}}</td>\n          <button (click)=\"getSubjectById([object.id])\">{{object.id}}</button>\n     <!--<td (click)=\"goToClassComponent()\" *ngFor=\"#class of subject.schoolClasses\"><div>{{class.name}}</div></td>-->\n\n</tr>\n<div *ngIf=\"[subject] != 0\">\n<H1>{{subject.name}}</H1>\n    <td *ngFor=\"#schoolClass of subject.schoolClasses\">\n            {{schoolClass.name}}\n            <button (click)=\"getStudentsWithGradesByClassId([schoolClass.id])\">{{schoolClass.id}}</button>\n    </td>\n</div>\n\n <div *ngIf=\"[studentsWithGradesList] != 0  && [studentsWithGradesAsSting].length > 0\">\n            <tr *ngFor=\"#student of studentsWithGradesAsSting\">\n            <H1>UCZEN : </H1>\n            <div *ngIf=\"[student] != 0\">\n            <tr><td> <span>IMIE:  </span> {{student.name}} </td><td>  <span>  NAZWISKO :</span> \t{{student.surname}}</td><span> OCENY  </span><td> <div [attr.id] = \"student.id\">  <input  [(ngModel)]=\"student.gradesAsString\" > <button (click)=\"dodajOCeny($event, [student.id])\" >Dodaj Oceny {{student.id}} a</button></div></td></tr>      \n                </div>\n     \n</div>\n\n\n  </table>\n  <button (click)=\"getSubjectsByTeacher()\"> PRZEDMIOTY</button>\n    <button (click)=\"getTeachers2()\"> Nauczyciele</button>\n    <button (click)=\"postTeacherek()\"> POST NAUCZYCIELA</button>\n\n",
                        providers: [teacher_service_1.TeacherService]
                    }), 
                    __metadata('design:paramtypes', [teacher_service_1.TeacherService, authentication_service_1.AuthenticationService])
                ], TeacherComponent);
                return TeacherComponent;
            }());
            exports_1("TeacherComponent", TeacherComponent);
        }
    }
});
//# sourceMappingURL=teacher.component.js.map