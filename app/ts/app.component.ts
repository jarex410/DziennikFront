import {Component} from 'angular2/core';
import {TeacherService} from "./services/teacher.service";
import {Teacher} from "./model/dziennik";
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/src/core/linker/interfaces";


@Component({
    selector: 'my-app',
    template: `
<table class="table">
  <tr>
  <td>IMIE</td><td>NAZWISKO</td>
</tr>
      <tr *ngFor="#teacher of teachers">
      <td>{{ teacher.name }}  </td><td>  {{teacher.surname}}</td>
      </tr>
  </table>
  <button (click)="function($event)"> JEDEN</button>
    <button (click)="clicked($event)"> DWA</button>
    <button (click)="postTeacherek()"> 3333</button>

`,
    providers: [HTTP_PROVIDERS, TeacherService]
})

export class AppComponent {

    clicked(event) {
        this.teachers = [];
    }

    function (event) {
        this.getTeachers();

    }

    teachers: Teacher[];

    teacher: Teacher;

    constructor(private _teacherService: TeacherService) {
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
}
