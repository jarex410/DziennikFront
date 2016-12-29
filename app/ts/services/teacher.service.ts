import {Injectable} from 'angular2/core';
import {Http,Headers,URLSearchParams} from 'angular2/http'
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


    getTechers():Observable<Teacher[]> {
      return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher')
          .map((response: Response) => <Teacher[]>response.json())
          .catch(this.handleError);
    }

    getTeacher1(id:string) {
      let parametrers = new URLSearchParams();
      parametrers.set("id", id);

      return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher',
        {search: parametrers})
        .map(res => res.json());
    } // leci po ??


    getTeacher(id:string) {
        let parametrers = new URLSearchParams();
        return this.http.get('http://dziennikelektroniczny.herokuapp.com/teacher/' + id)
            .map(res => res.json());
    }  //leci po urlu

    addTeache (body: Object): Observable<Teacher[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('http://dziennikelektroniczny.herokuapp.com/teacher', bodyString, options) // ...using post request
            .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


     AddTeacherek (){
        let toAdd = JSON.stringify({
                address: "Rzeszow 2",
                login: "zzzz",
                name: "zzzz",
                password: "zzzz",
                surname: "zzzzz",
                isEducator: "true"
            }
        );
        var params ='json='+toAdd;
        var headers = new Headers();
        headers.append('Content-Type','application/json');

        return this.http.post('http://dziennikelektroniczny.herokuapp.com/teacher', toAdd, { headers: headers })
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
