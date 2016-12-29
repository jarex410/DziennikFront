import {TeacherService} from "../services/teacher.service";
import {Teacher, Subject, SchoolClass, Student} from "../model/dziennik";
import {Component} from 'angular2/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "angular2/src/router/router";
import {Input} from "angular2/src/core/metadata";
import {MainService} from "../services/main.service";


@Component({
    selector: 'teacher',
    template: `
<table class="table">
  <tr>
  <td>PRZEDMIOT</td>
</tr>
<tr *ngFor="#subject of teacher.subjectList">
     <td (click)="goToClassComponent()" *ngFor="#class of subject.schoolClasses"><div>{{class.name}}</div></td>

</tr>

{{classID}}
<klasa classID={{clasValue}}></klasa>
  </table>
  <button (click)="function($event)"> JEDEN</button>
    <button (click)="clicked($event)"> DWA</button>
    <button (click)="postTeacherek()"> 3333</button>
    <button (click)="getTeacher()"> GET TEACHEREK</button>
{{teacher.subjecList}}
`,
    providers: [TeacherService, AuthenticationService, MainService]
}) export  class TeacherComponent{

     classID = "aaa";




    clicked(event) {
        this.teachers = [];
    }

    function (event) {
        this.getTeachers();

    }

    teachers: Teacher[];

    teacher = this.getTeacher;


    goToClassComponent(){
        this._router.navigate(['Class']);
    }

    constructor(private _teacherService: TeacherService,
    private _authenticationServie: AuthenticationService,
                private _router: Router, private mainService: MainService) {

        this.mainService.addID("DUPA TEACHER" );
        console.log("KONSTRUKTOR TEACHER" );

    }

    ngOnInit() {
        this.getTeachers();
    }

    getTeachers(): void {
        this._teacherService.getTechers()
            .subscribe((data: Teacher[]) => this.teachers = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }

    submitForm() {

        this._teacherService.addTeache(this.teacher)

    }
    postTeacherek(){
        this._teacherService.AddTeacherek()
            .subscribe((data:Teacher)=> this.teacher = data,
                error => alert(error),
                ()=>console.log("POST POSZEDL"))
    }

    subjectList: Subject[];
    classList: SchoolClass[];
    studentList:Student[];


    getTeacher(){
        this._authenticationServie.getUser("panJacek")
            .subscribe((data:Teacher)=> this.teacher = data,
                error => alert(error),
                ()=>console.log("GET POSZEDL"))

    }
}