System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(login, password, teacher) {
                    this.login = login;
                    this.password = password;
                    this.teacher = teacher;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=dziennik.js.map