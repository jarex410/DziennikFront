import {Injectable} from "angular2/src/core/di/decorators";
import {Http} from "angular2/src/http/http";
import {Response} from "angular2/src/http/static_response";
import {Observable} from "rxjs";




@Injectable()
export class StudentService {

    constructor(private http: Http) {

    }

    getCardByStudentID(id:string) {
        return this.http.get('http://dziennikelektroniczny.herokuapp.com/student/card/' + id)
            .map(res => res.json());
    }

}
