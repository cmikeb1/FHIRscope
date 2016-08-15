import {Component} from "@angular/core";
import {ConformanceService} from "./shared/conformance.service";
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {DROPDOWN_DIRECTIVES, CollapseDirective, TOOLTIP_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';



@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES, CollapseDirective, TOOLTIP_DIRECTIVES],
    providers: [ConformanceService]
})
export class AppComponent {

    constructor(private router:Router) {
    }

    title = "FHIRscope";
}