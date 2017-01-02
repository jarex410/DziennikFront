import {TeacherService} from "../services/teacher.service";
import {Teacher, Subject, Student, User} from "../model/dziennik";
import {Component} from "angular2/core";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "angular2/src/router/router";
import {MainService} from "../services/main.service";


@Component({
    selector: 'teacher',
    template: `
<table class="table">
  <tr>
  <td>PRZEDMIOT</td>
</tr>
<tr *ngFor="#object of tableData">
{{object.id}}
     <td>{{object.name}}</td>
          <button (click)="getSubjectById([object.id])">{{object.id}}</button>
     <!--<td (click)="goToClassComponent()" *ngFor="#class of subject.schoolClasses"><div>{{class.name}}</div></td>-->

</tr>
<div *ngIf="[subject] != 0">
<H1>{{subject.name}}</H1>
    <td *ngFor="#schoolClass of subject.schoolClasses">
            {{schoolClass.name}}
            <button (click)="getStudentsWithGradesByClassId([schoolClass.id])">{{schoolClass.id}}</button>
    </td>
</div>

 <div *ngIf="[studentsWithGradesList] != 0  && [studentsWithGradesList].length > 0">
            <tr *ngFor="#student of studentsWithGradesList">
            <H1>UCZEN : </H1>
            <div *ngIf="[student] != 0">
            <tr><td> IMIE: {{student.name}} \t  </td><td>  \tNAZWISKO : \t{{student.surname}}</td>OCENY: <td *ngFor="#grade of student.grades"> {{grade.gradeValue}},</td></tr>      
                </div>
     
</div>


  </table>
  <button (click)="getSubjectsByTeacher()"> PRZEDMIOTY</button>
    <button (click)="getTeachers2()"> Nauczyciele</button>
    <button (click)="postTeacherek()"> POST NAUCZYCIELA</button>

`,
    providers: [TeacherService, AuthenticationService, MainService]
})
export class TeacherComponent {

    logedUser: User;

    subjectList: Subject[];
    subject: Subject;
    studentList: Student[];

    tableData: any[];
    studentsWithGradesList: any[];

    subjectID: string;

    teacherID: string = "1";
    teachers: Teacher[];

    teacher = this.getTeacher;


    constructor(private _teacherService: TeacherService,
                private _authenticationServie: AuthenticationService,
                private _router: Router, private mainService: MainService) {
    }

    ngOnInit() {
        this.getTeachers();
        this.getSubjectsByTeacher();
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

    postTeacherek() {
        this._teacherService.AddTeacherek()
            .subscribe((data: Teacher)=> this.teacher = data,
                error => alert(error),
                ()=>console.log("POST POSZEDL"))
    }


    getTeacher() {
        this._authenticationServie.getUser("panJacek")
            .subscribe((data: Teacher)=> this.teacher = data,
                error => alert(error),
                ()=>console.log("GET POSZEDL"))

    }

    getSubjectList(teacherID) {
        this._teacherService.getSubjectsByTeacherId(teacherID)
            .subscribe((data: Subject[])=> this.subjectList = data,
                error => alert(error),
                ()=>console.log("LISTA PRZEDMIOTOW UZYTKOWNIKA"))

    }

    getSubjectsByTeacher() {
        console.log("getSUBJECT AJAX");
        this.getSubjectList(this.teacherID);
        console.log("getSUBJECT");
        this.tableData = this.subjectList;
    }

    getTeachers2() {
        console.log("getTeachers");
        this.tableData = this.teachers;
    }

    getSubjectById(subjectID) {
        this.resetValues();
        this._teacherService.getSubjectById(subjectID)
            .subscribe((data: Subject)=> this.subject = data,
                error => alert(error),
                ()=>console.log("PRZEDMIOT PO ID"))
    }

    getStudentListByClassId(classID) {
        this._teacherService.getStudentsByClassId(classID)
            .subscribe((data: Student[])=> this.studentList = data,
                error => alert(error),
                ()=>console.log("LISTA UCZNIOW KLASY" + this.studentList.toString()))
    }

    getStudentsWithGradesByClassId(classID) {
        this._teacherService.getStudentsWithGradesByClassId(classID)
            .subscribe((data: any[])=> this.studentsWithGradesList = data,
                error => alert(error),
                ()=>console.log("LISTA UCZNIOW KLASY z ocenami" + this.studentsWithGradesList.toString());
    }

    resetValues() {
        this.studentList = [];
    }

    /*      getSubject(){
     this._teacherService.getSubjectsByTeacherId(this.subjectID)
     .subscribe((data:Subject[])=> this.subjectList = data,
     error => alert(error),
     ()=>console.log("GET POSZEDL na sub list"))
     }*/


    /*    getLogedUser(){
     this._authenticationService.getUser(this.user.login)
     .subscribe((data:User)=>this.logedUser = data,
     error => alert(error),
     ()=>console.log("GET NA USERA OISZEDK"))
     }*/
}