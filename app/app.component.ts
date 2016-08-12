import {Component} from "@angular/core";
import {ConformanceService} from "./shared/conformance.service";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MdToolbar} from '@angular2-material/toolbar';


@Component({
    selector: 'my-app',
    template: `
        <md-toolbar color="primary">
            {{title}}
        </md-toolbar>
        <a [routerLink]="['/selector-static-list']">Static List Selector</a>
        <a [routerLink]="['/help']">Help</a>
        <router-outlet></router-outlet>        
    `,
    directives: [ROUTER_DIRECTIVES, MdToolbar],
    providers: [ConformanceService]
})
export class AppComponent {
    title = "FHIRscope";
}