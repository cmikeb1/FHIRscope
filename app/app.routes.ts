import {RouterConfig, provideRouter} from "@angular/router";
import {SelectorStaticListComponent} from "./selector-static-list/selector-static-list.component";
import {HelpComponent} from "./help/help.component";

const routes: RouterConfig = [{
    path: 'selector-static-list',
    component: SelectorStaticListComponent
},{
    path: 'help',
    component: HelpComponent
},{
    path: '',
    redirectTo: '/selector-static-list',
    pathMatch: 'full'
}];

export const appRouterProviders = [
    provideRouter(routes)
];