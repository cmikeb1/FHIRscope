import {Component} from '@angular/core';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [MdCheckbox, MdButton]
})
export class AppComponent {
}