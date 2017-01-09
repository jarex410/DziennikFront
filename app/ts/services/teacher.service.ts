import {Injectable} from "angular2/core";
import {Http, Headers, URLSearchParams} from "angular2/http";
import {Teacher, Subject, Student} from "../model/dziennik";
import {Response} from "angular2/src/http/static_response";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {RequestOptions} from "angular2/src/http/base_request_options";


@Injectable()
export class TeacherService {

    private headers: Headers;
    private options: RequestOptions;

    constructor(private http: Http) {

        this.headers = new Headers();
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('x-id', '1');
        this.options = new RequestOptions({headers: this.headers});

    }


    getTechers(): Observable<Teacher[]> {
        return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher')
            .map((response: Response) => <Teacher[]>response.json())
            .catch(this.handleError);
    }

    getTeacher(id: string) {
        let parametrers = new URLSearchParams();
        return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher/' + id)
            .map(res => res.json());
    }  //leci po urlu


    addTeacher(teacher: Teacher) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(
            'http://dziennikelektroniczny.herokuapp.com/teacher',
            JSON.stringify(teacher), headers);
    }

    getSubjectById(id: string) {
        return this.http.get('http://dziennikelektroniczny.herokuapp.com/subject/' + id)
            .map(res => res.json());
    }

    getSubjectsByTeacherId(teacherID): Observable<Subject[]> {
        let parametrers = new URLSearchParams();
        parametrers.set("teacherID", teacherID);

        return this.http.get('http://dziennikelektroniczny.herokuapp.com/subject',
            {search: parametrers})
            .map((response: Response) => <Subject[]>response.json())
            .catch(this.handleError);
    }

    getStudentsByClassId(classID): Observable<Student[]> {
        let parametrers = new URLSearchParams();
        parametrers.set("classID", classID);

        return this.http.get('http://dziennikelektroniczny.herokuapp.com/student',
            {search: parametrers})
            .map((response: Response) => <Student[]>response.json())
            .catch(this.handleError);
    }

    getStudentsWithGradesByClassId(classID, subjectID): Observable<Student[]> {
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
        headers.append('Content-Type', 'application/json');

        return this.http.post('http://dziennikelektroniczny.herokuapp.com/teacher/grades', toAdd, {headers: headers})
            .catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


}
