import {Routes, RouterModule} from "@angular/router";
import {SelectorStaticListComponent} from "./selector-static-list/selector-static-list.component";
import {HelpComponent} from "./help/help.component";
import {SelectorStaticComponent} from "./selector-static/selector-static.component";

const appRoutes: Routes = [{
    path: 'selector-static-list',
    component: SelectorStaticListComponent
},
    {
        path: 'selector-static',
        component: SelectorStaticComponent
    },
    {
        path: 'help',
        component: HelpComponent
    }, {
        path: '',
        redirectTo: '/selector-static',
        pathMatch: 'full'
    }];

export const routing = RouterModule.forRoot(appRoutes);