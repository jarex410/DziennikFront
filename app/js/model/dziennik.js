System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Grade, User;
    return {
        setters:[],
        execute: function() {
            Grade = (function () {
                function Grade(studentID, subjectID, values, subjecName, valuesAssString) {
                    this.studentID = studentID;
                    this.subjectID = subjectID;
                    this.values = values;
                    this.subjecName = subjecName;
                    this.valuesAssString = valuesAssString;
                }
                ;
                return Grade;
            }());
            exports_1("Grade", Grade);
            User = (function () {
                function User(id, login, password, teacher, name, surname) {
                    this.id = id;
                    this.login = login;
                    this.password = password;
                    this.teacher = teacher;
                    this.name = name;
                    this.surname = surname;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=dziennik.js.map