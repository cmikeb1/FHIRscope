import {Component, Input} from '@angular/core';
import {Conformance, Rest, Resource} from './Conformance';

@Component({
    selector: 'my-conformance-detail',
    template: `
        <div *ngIf="conformance">
            <div>
                <label>Source: </label>
                <input [(ngModel)]="conformance.sourceUrl" placeholder="source url">
            </div>
            <p>Source: </p><pre>{{conformance.sourceUrl}}</pre>
            <p>Resource Type: {{conformance.resourceType}}, Publisher: {{conformance.publisher}}</p>
            <h3>REST Endpoints</h3>
            <div *ngFor="let rest of conformance.rests">
                <p>Mode: {{rest.mode}}</p>
                <p>Resources:</p>
                <li *ngFor="let resource of rest.resources">
                    <span>{{resource.type}}</span>
                </li>
            </div>
        </div>`
})
export class ConformanceDetailComponent {
    @Input()
    conformance:Conformance;
}