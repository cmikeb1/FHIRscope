import {Component, OnInit} from '@angular/core';
import {FhirConfComponent} from '../fhir-conformance-detail/fhir-conf/fhir-conf.component';
import {ConformanceService} from '../shared/conformance.service';
import Resource = fhir.Resource;


@Component({
    moduleId: module.id,
    selector: 'selector-dynamic-entry',
    templateUrl: 'selector-dynamic-entry.component.html',
    styleUrls: ['selector-dynamic-entry.component.css'],
    directives: [FhirConfComponent]
})
export class SelectorDynamicEntryComponent implements OnInit {

    private selectedConfUrl:string;
    private conformance:Resource;

    constructor(private conformanceService:ConformanceService) {
    }

    onSelectSource(confUrl:string) {
        this.selectedConfUrl = confUrl;
        this.getConformanceFromSourceUrl(confUrl);
    }

    getConformanceFromSourceUrl(confUrl:string) {
        this.conformanceService.getConformanceBySourceUrl(confUrl)
            .then(conformance => this.conformance = conformance)
            .then(conformance => console.log(conformance));
    }

    ngOnInit(){

    }
}