import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Headers} from 'angular2/http';
import {Teacher} from "../model/dziennik";
import {Response} from "angular2/src/http/static_response";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {RequestOptions} from "angular2/src/http/base_request_options";


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


  getTEst = () => [
    { id: 1, name: 'BMW' },
    { id: 2, name: 'Suzuki' },
    { id: 3, name: 'Volkswagen' }
  ];
    getTechers():Observable<Teacher[]> {
      return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher')
          .map((response: Response) => <Teacher[]>response.json())
          .catch(this.handleError);
    }

    getTeacher(id:string) {
      let parametrers = new URLSearchParams();
      parametrers.set("id", id);

      return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher',
        {search: parametrers})
        .map(res => res.json());
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


    mapPersons(response:Response): Teacher[]{
        // The response of the API has a results
        // property with the actual results
        return response.json().results.map(this.toTeacher)
    }

    toTeacher(r:any): Teacher{
        let teacher = <Teacher>({
            id: r.id,
            name: r.name,
        });
        console.log('Parsed person:', teacher);
        return teacher;
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
