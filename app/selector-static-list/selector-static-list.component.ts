import {Component, OnInit} from '@angular/core';
import {FhirConfComponent} from '../fhir-conformance-detail/fhir-conf/fhir-conf.component';
import {ConformanceService} from '../shared/conformance.service';
import Resource = fhir.Resource;


@Component({
    moduleId: module.id,
    selector: 'selector-static-list',
    templateUrl: 'selector-static-list.component.html',
    styleUrls: ['selector-static-list.component.css'],
    directives: [FhirConfComponent]
})
export class SelectorStaticListComponent implements OnInit {

    private selectedConfUrl:string;
    private conformance:Resource;
    private suggestedConf = suggestedConf;

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
        this.onSelectSource(this.suggestedConf[4]);
    }
}

const suggestedConf = [
    "http://sbs-sandbox.co.ihc.com:8080/sbs-fhir-cdr/data/metadata",
    "http://sbs-sandbox.co.ihc.com:8080/sbs-fhir-jpa/data/metadata",
    "http://lpv-ecisdev246:8080/sbs-fhir-cdr/data/metadata",
    "http://lpv-ecisdev246:8080/sbs-fhir-example/data/metadata",
    "https://fhir-open.sandboxcernerpowerchart.com/may2015/d075cf8b-3261-481d-97e5-ba6c48d3b41f/metadata",
    "http://fhirtest.uhn.ca/baseDstu2/metadata"
    ];