/**
 * Created by JaroLP on 2016-12-03.
 */
export interface Teacher {
    id:string;
    login:string;
    name:string;
    surname:string;
    address:string;
    subjectList:Subject[];

}

export interface Student {
    login:string;
    name:string
    surname:string;
    grades: Grade[];
}


export interface Subject {
    name:string;
    schoolClasses: SchoolClass[];
}

export interface SchoolClass {
    name:string;
    studentList: Student[];
}

export interface Grade {
    value:string;
    studentList: Student[];
}

export class User {
    constructor(
        public login: string,
        public password: string,
        public teacher: boolean) { }
}