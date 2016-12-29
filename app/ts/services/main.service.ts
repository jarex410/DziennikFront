import { Injectable } from 'angular2/core';
import { Subject }    from 'rxjs/Subject';
import {Observable} from "rxjs";
@Injectable()
export class MainService

{
    // Observable string sources
    private classIdSource = new Subject<string>();

    //private missionConfirmedSource = new Subject<string>();
    // Observable string streams


    classID$ = this.classIdSource.asObservable();
    //missionConfirmed$ = this.missionConfirmedSource.asObservable();
    // Service message commands


    addID(id: string) {
        this.classIdSource.next(id);
        console.log("WYWOLANIE  ste + " + id)
    }

    pom:string='AAAAAA'

    getID():Observable<String>{
        console.log("WYWOLANIE  get + ")
         return this.classID$;

    }

}