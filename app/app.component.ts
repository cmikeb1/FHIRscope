import {Component} from "@angular/core";
import {ConformanceComponent} from "./conformance.component";
import {ConformanceService} from "./conformance.service";
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <a [routerLink]="['/conformance']">Conformance</a>
        <a [routerLink]="['/help']">Help</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ConformanceService]
})
export class AppComponent {
    title = "FHIRscope";
}