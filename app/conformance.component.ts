import {Component, OnInit} from '@angular/core';
import {Conformance, Rest, Resource} from './Conformance';
import {ConformanceDetailComponent} from './conformance-detail.component';
import {ConformanceService} from './conformance.service';


@Component({
    selector: 'my-conformance',
    template: `
        <ul>
            <li *ngFor="let conf of suggestedConf" class="source" (click)="onSelectSource(conf)" [class.selected]="conf === conformance">{{conf.sourceUrl}}</li>
        </ul>
        <my-conformance-detail [conformance]="conformance"></my-conformance-detail>
        `,
    styles: [`
        li.source:hover {
            font-weight: bold;
            cursor: pointer;
        }
        li.selected {
            color: red;            
        }
    `],
    directives: [ConformanceDetailComponent]
})
export class ConformanceComponent implements OnInit {

    private conformance:Conformance;
    public suggestedConf:Conformance[];

    constructor(private conformanceService:ConformanceService) {
    }

    onSelectSource(conf:Conformance) {
        this.conformance = conf;
    }

    getSuggestedConformances() {
        this.conformanceService.getConformance().then(conformance => this.suggestedConf = conformance);
    }

    ngOnInit(){
        this.getSuggestedConformances();
    }
}