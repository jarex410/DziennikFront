export interface Teacher {
    id: string;
    login: string;
    name: string;
    surname: string;
    address: string;
    subjectList: Subject[];

}

export interface Student {
    login: string;
    name: string
    surname: string;
    grades: string;
}


export interface Subject {
    name: string;
    schoolClasses: SchoolClass[];
}

export interface SchoolClass {
    name: string;
    studentList: Student[];
}

export class Grade {
    constructor(public studentID: string,
                public subjectID: string,
                public values: string[],
                public subjecName: string,
                public valuesAssString: string) {
    };
}

export class User {
    constructor(public id: string,
                public login: string,
                public password: string,
                public teacher: boolean,
                public name: string,
                public surname: string) {
    }
}