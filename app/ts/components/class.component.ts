import {TeacherService} from "../services/teacher.service";
import {Teacher, Subject} from "../model/dziennik";
import {Component} from 'angular2/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "angular2/src/router/router";
import {TeacherComponent} from "./teacher.component";
import {MainService} from "../services/main.service";
import {Subscription} from "rxjs";
import {Input} from "angular2/src/core/metadata";


@Component({
    selector: 'klasa',
    template: `
<table class="table">
  <tr>
  <td>Klasa</td>
<!--  <teacher [classID] = "clasValue"></teacher>-->
  {{clasValue}}
</tr>

`,
    providers: [TeacherService, AuthenticationService],
    directives: [TeacherComponent]
}) export  class ClassComponent{

    @Input() clasValue:String;
    constructor(private _router: Router, private mainService: MainService) {
        this.getClassID();
        console.log("KLASAAA KLASAAA");
    }

    public getClassID(): void{
        this.mainService.getID()
            .subscribe((data: String) => this.clasValue = data,
                error => console.log(error),
                () => console.log('\n\nGet CLASSSSS IDDDDD \n\n'));
    }

}