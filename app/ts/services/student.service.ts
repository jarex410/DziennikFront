import {Injectable} from "angular2/src/core/di/decorators";
import {Http} from "angular2/src/http/http";


@Injectable()
export class StudentService {

    constructor(private http: Http) {

    }

    getCardByStudentID(id: string) {
        return this.http.get('http://dziennikelektroniczny.herokuapp.com/student/card/' + id)
            .map(res => res.json());
    }

}
