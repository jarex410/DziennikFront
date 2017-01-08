System.register(["../services/teacher.service.js", 'angular2/core', "../services/authentication.service.js", "angular2/src/router/router", "./teacher.component.js", "../services/main.service", "angular2/src/core/metadata"], function(exports_1, context_1) {
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
    var teacher_service_1, core_1, authentication_service_1, router_1, teacher_component_1, main_service_1, metadata_1;
    var ClassComponent;
    return {
        setters:[
            function (teacher_service_1_1) {
                teacher_service_1 = teacher_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (teacher_component_1_1) {
                teacher_component_1 = teacher_component_1_1;
            },
            function (main_service_1_1) {
                main_service_1 = main_service_1_1;
            },
            function (metadata_1_1) {
                metadata_1 = metadata_1_1;
            }],
        execute: function() {
            ClassComponent = (function () {
                function ClassComponent(_router, mainService) {
                    this._router = _router;
                    this.mainService = mainService;
                    this.getClassID();
                    console.log("KLASAAA KLASAAA");
                }
                ClassComponent.prototype.getClassID = function () {
                    var _this = this;
                    this.mainService.getID()
                        .subscribe(function (data) { return _this.clasValue = data; }, function (error) { return console.log(error); }, function () { return console.log('\n\nGet CLASSSSS IDDDDD \n\n'); });
                };
                __decorate([
                    metadata_1.Input(), 
                    __metadata('design:type', String)
                ], ClassComponent.prototype, "clasValue", void 0);
                ClassComponent = __decorate([
                    core_1.Component({
                        selector: 'klasa',
                        template: "\n<table class=\"table\">\n  <tr>\n  <td>Klasa</td>\n<!--  <teacher [classID] = \"clasValue\"></teacher>-->\n  {{clasValue}}\n</tr>\n\n",
                        providers: [teacher_service_1.TeacherService, authentication_service_1.AuthenticationService],
                        directives: [teacher_component_1.TeacherComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, main_service_1.MainService])
                ], ClassComponent);
                return ClassComponent;
            }());
            exports_1("ClassComponent", ClassComponent);
        }
    }
});
//# sourceMappingURL=class.component.js.map