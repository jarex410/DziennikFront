import {TeacherService} from "../services/teacher.service";
import {Teacher, Subject, Student, Grade, User} from "../model/dziennik";
import {Component} from "angular2/core";
import {AuthenticationService} from "../services/authentication.service";


@Component({
    selector: 'teacher',
    template: `
<table class="table">
  <tr>
  <td>WITAJ {{currentUser.name}} ___ {{currentUser.surname}}</td>
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

 <div *ngIf="[studentsWithGradesList] != 0  && [studentsWithGradesAsSting].length > 0">
            <tr *ngFor="#student of studentsWithGradesAsSting">
            <H1>UCZEN : </H1>
            <div *ngIf="[student] != 0">
            <tr><td> <span>IMIE:  </span> {{student.name}} </td><td>  <span>  NAZWISKO :</span> \t{{student.surname}}</td><span> OCENY  </span><td> <div [attr.id] = "student.id">  <input  [(ngModel)]="student.gradesAsString" > <button (click)="dodajOCeny($event, [student.id])" >Dodaj Oceny {{student.id}} a</button></div></td></tr>      
                </div>
     
</div>


  </table>
  <button (click)="getSubjectsByTeacher()"> PRZEDMIOTY</button>
    <button (click)="getTeachers2()"> Nauczyciele</button>
    <button (click)="postTeacherek()"> POST NAUCZYCIELA</button>

`,
    providers: [TeacherService]
})
export class TeacherComponent {

    currentUser: User;

    subjectList: Subject[];
    subject: Subject;
    studentList: Student[];

    tableData: any[];
    studentsWithGradesList: any[];

    curentSubjectID: string;

    teacherID: string;
    teachers: Teacher[];

    teacher = this.getTeacher;

    newGrades: string = '';


    constructor(private _teacherService: TeacherService,
                private _authenticationServie: AuthenticationService) {
    }

    ngOnInit() {

        this.currentUser = this._authenticationServie.getCurrentUser();
        this.teacherID = this.currentUser.id;
        this.getSubjectsByTeacher();
    }

    getTeachers(): void {
        this._teacherService.getTechers()
            .subscribe((data: Teacher[]) => this.teachers = data,
                error => console.log(error),
                () => console.log('Get all Items complete'));
    }

    postTeacherek() {
        this._teacherService.postTeacher()
            .subscribe(
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
        this.curentSubjectID = subjectID;
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
        this._teacherService.getStudentsWithGradesByClassId(classID, this.curentSubjectID)
            .subscribe((data: any[])=> this.studentsWithGradesList = data,
                error => alert(error),
                ()=>console.log("LISTA UCZNIOW KLASY z ocenami" + this.studentsWithGradesList.toString()));
        this.getGradesAsString();
    }

    studentsWithGradesAsSting = [];

    getGradesAsString() {
        this.studentsWithGradesList.forEach(element => {
            let index = 0;
            let grades = element.grades;
            let gradesAsString = '';
            grades.forEach(grade => {
                gradesAsString += grade.gradeValue + ', ';
            })
            element.gradesAsString = gradesAsString;
            this.studentsWithGradesAsSting.push(this.studentsWithGradesList[index] = element);
            index += 1;
        })
    }

    resetValues() {
        this.studentList = [];
        this.studentsWithGradesList = [];
        this.studentsWithGradesAsSting = [];
        console.log("RESET");
    }

    dodajOCeny(event, studentID) {

        var target = event.target || event.srcElement || event.currentTarget;
        var value = target.parentElement.firstElementChild.value;

        let pom = value.split(',');
        let grade = new Grade(studentID[0], this.curentSubjectID[0], pom, null, null);
        console.log("GRADE        " + grade.toString())
        this._teacherService.addGradesToStudent(grade)
            .subscribe(
                error => alert(error),
                ()=>console.log("POST POSZEDL z ocenami"))
        this.newGrades = '';
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