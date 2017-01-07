import {bind} from 'angular2/core';
import {ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS} from 'angular2/router';
import {bootstrap}        from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import { HTTP_PROVIDERS } from 'angular2/http';
import {AuthenticationService} from "./services/authentication.service";

bootstrap(AppComponent, [HTTP_PROVIDERS,AuthenticationService,
    ROUTER_PROVIDERS,bind(APP_BASE_HREF).toValue(location.pathname)
]);