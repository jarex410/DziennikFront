import {Component} from 'angular2/core';
import {TeacherService} from "./services/teacher.service";
import {Teacher} from "./model/dziennik";
import any = jasmine.an
import {HTTP_PROVIDERS} from "angular2/http";
import {OnInit} from "angular2/src/core/linker/interfaces";


@Component({
    selector: 'my-app',
    template: `
    <ul>
      <li *ngFor="#teacher of teachers">{{teacher.name}}</li>
    </ul>
  `,
    providers:[HTTP_PROVIDERS, TeacherService]
})

export class AppComponent implements OnInit {

    teachers:Teacher[];

    constructor(private _teacherService: TeacherService) {
    }

    ngOnInit() {
        this.getTeachers();
    }

    getTeachers():void {
        this._teacherService.getTechers()
            .subscribe((data:Teacher[]) => this.teachers = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }
}
