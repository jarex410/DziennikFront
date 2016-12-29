System.register(['angular2/core', 'rxjs/Subject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Subject_1;
    var MainService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            MainService = (function () {
                function MainService() {
                    // Observable string sources
                    this.classIdSource = new Subject_1.Subject();
                    //private missionConfirmedSource = new Subject<string>();
                    // Observable string streams
                    this.classID$ = this.classIdSource.asObservable();
                    this.pom = 'AAAAAA';
                }
                //missionConfirmed$ = this.missionConfirmedSource.asObservable();
                // Service message commands
                MainService.prototype.addID = function (id) {
                    this.classIdSource.next(id);
                    console.log("WYWOLANIE  ste + " + id);
                };
                MainService.prototype.getID = function () {
                    console.log("WYWOLANIE  get + ");
                    return this.classID$;
                };
                MainService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MainService);
                return MainService;
            }());
            exports_1("MainService", MainService);
        }
    }
});
//# sourceMappingURL=main.service.js.map