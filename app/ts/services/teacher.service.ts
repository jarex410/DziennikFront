import {Injectable} from 'angular2/core';
import {Http,Headers,URLSearchParams} from 'angular2/http'
import {Teacher, Subject, Student, Grade} from "../model/dziennik";
import {Response} from "angular2/src/http/static_response";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {RequestOptions} from "angular2/src/http/base_request_options";
import {map} from "rxjs/operator/map";


@Injectable()
export class TeacherService {

    private headers: Headers;
    private  options:RequestOptions;

  constructor(private http:Http) {

      this.headers = new Headers();
      this.headers.append('Accept', 'application/json');
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('x-id','1');
      this.options= new RequestOptions({ headers: this.headers });

  }


    getTechers():Observable<Teacher[]> {
      return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher')
          .map((response: Response) => <Teacher[]>response.json())
          .catch(this.handleError);
    }

    getTeacher(id:string) {
        let parametrers = new URLSearchParams();
        return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher/' + id)
            .map(res => res.json());
    }  //leci po urlu


     postTeacher (){

         let toAdd = JSON.stringify({
                address: "Rzeszow 2",
                login: "zzzz",
                name: "zzzz",
                password: "zzzz",
                surname: "zzzzz",
                isEducator: "true"
            }
        );

        var headers = new Headers();
        headers.append('Content-Type','application/json');

        return this.http.post('http://dziennikelektroniczny.herokuapp.com/teacher/grades', toAdd, { headers: headers })
            .catch(this.handleError);
    }


    addTeacher(teacher:Teacher) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

/*
     var newTeacher = new URLSearchParams();
    newTeacher.set("name", teacher.name)
*/

    return this.http.post(
      'http://dziennikelektroniczny.herokuapp.com/teacher',
      JSON.stringify(teacher),headers);
  }




    getSubjectById(id:string) {
        return this.http.get('http://dziennikelektroniczny.herokuapp.com/subject/' + id)
            .map(res => res.json());
    }  //leci po urlu


    getSubjectsByTeacherId(teacherID):Observable<Subject[]> {
        let parametrers = new URLSearchParams();
        parametrers.set("teacherID", teacherID);

        return this.http.get('http://dziennikelektroniczny.herokuapp.com/subject',
            {search: parametrers})
            .map((response: Response) => <Subject[]>response.json())
            .catch(this.handleError);
    }

    getStudentsByClassId(classID):Observable<Student[]> {
        let parametrers = new URLSearchParams();
        parametrers.set("classID", classID);

        return this.http.get('http://dziennikelektroniczny.herokuapp.com/student',
            {search: parametrers})
            .map((response: Response) => <Student[]>response.json())
            .catch(this.handleError);
    }

    getStudentsWithGradesByClassId(classID,subjectID):Observable<Student[]> {
        let parametrers = new URLSearchParams();
        parametrers.set("classID", classID);
        parametrers.set("subjectID", subjectID)

        return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher/grades',
            {search: parametrers})
            .map((response: Response) => <Student[]>response.json())
            .catch(this.handleError);
    }

    addGradesToStudent(grades) {

        let toAdd = JSON.stringify(grades);

        var headers = new Headers();
        headers.append('Content-Type','application/json');

        return this.http.post('http://dziennikelektroniczny.herokuapp.com/teacher/grades', toAdd, { headers: headers })
            .catch(this.handleError);
    }


// to avoid breaking the rest of our app
// I extract the id from the person url
    extractId(personData:any){
        let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
        return parseInt(extractedId);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}
