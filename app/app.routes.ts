import {RouterConfig, provideRouter} from "@angular/router";
import {ConformanceComponent} from "./conformance.component";
import {HelpComponent} from "./help.component";

const routes: RouterConfig = [{
    path: 'conformance',
    component: ConformanceComponent
},{
    path: 'help',
    component: HelpComponent
},{
    path: '',
    redirectTo: '/conformance',
    pathMatch: 'full'
}];

export const appRouterProviders = [
    provideRouter(routes)
];