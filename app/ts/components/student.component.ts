import {Component} from "angular2/core";
import {AuthenticationService} from "../services/authentication.service";
import {StudentService} from "../services/student.service";
import any = jasmine.any;
import {User} from "../model/dziennik";

@Component({
    selector: 'my-app',
    template: `
<table class="table">
  <tr>
  <td>IMIE</td><td>{{subjectWithGrades}} KUPA</td>
</tr>
<h1>UCZENNN</h1>
  </table>
  <button (click)="getCard() "> KARDKA</button>
   <p>OCENY:</p>
    <ul>
      <li *ngFor="#subject of subjectWithGrades">
        <td>{{ subject.subjectName }}</td><td>{{ subject.valuesAssString}}</td>
      </li>
    </ul>

`,
    providers: [StudentService]
})
export class StudentComponent {

    subjectWithGrades : any[];
    currentUser :User;

    constructor(private _authenticationService: AuthenticationService,
                private _studentService: StudentService) {

    }


    ngOnInit() {

        this.currentUser =  this._authenticationService.getCurrentUser();
    }

    getCard() {
        this._studentService.getCardByStudentID(this.currentUser.id)
            .subscribe((data)=> this.subjectWithGrades = data,
                error => alert(error),
                ()=>console.log("KARDKA PRZYSZLA  " + this.subjectWithGrades))
    }
}