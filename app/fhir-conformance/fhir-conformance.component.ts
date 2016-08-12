import {Component, Input} from '@angular/core';
import Resource = fhir.Resource;

@Component({
    moduleId: module.id,
    selector: 'fhir-conformance',
    templateUrl: 'fhir-conformance.component.html'
})
export class FhirConformanceComponent {
    @Input()
    conformance: Resource;
}