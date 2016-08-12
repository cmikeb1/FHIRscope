"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var fhir_conformance_component_1 = require('../fhir-conformance/fhir-conformance.component');
var conformance_service_1 = require('../shared/conformance.service');
var SelectorStaticListComponent = (function () {
    function SelectorStaticListComponent(conformanceService) {
        this.conformanceService = conformanceService;
        this.suggestedConf = suggestedConf;
    }
    SelectorStaticListComponent.prototype.onSelectSource = function (confUrl) {
        this.selectedConfUrl = confUrl;
        this.getConformanceFromSourceUrl(confUrl);
    };
    SelectorStaticListComponent.prototype.getConformanceFromSourceUrl = function (confUrl) {
        var _this = this;
        this.conformanceService.getConformanceBySourceUrl(confUrl)
            .then(function (conformance) { return _this.conformance = conformance; })
            .then(function (conformance) { return console.log(conformance); });
    };
    SelectorStaticListComponent.prototype.ngOnInit = function () {
        this.onSelectSource(this.suggestedConf[0]);
    };
    SelectorStaticListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'selector-static-list',
            templateUrl: 'selector-static-list.component.html',
            styleUrls: ['selector-static-list.component.css'],
            directives: [fhir_conformance_component_1.FhirConformanceComponent]
        }), 
        __metadata('design:paramtypes', [conformance_service_1.ConformanceService])
    ], SelectorStaticListComponent);
    return SelectorStaticListComponent;
}());
exports.SelectorStaticListComponent = SelectorStaticListComponent;
var suggestedConf = [
    "http://sbs-sandbox.co.ihc.com:8080/sbs-fhir-cdr/data/metadata",
    "http://sbs-sandbox.co.ihc.com:8080/sbs-fhir-jpa/data/metadata",
    "http://lpv-ecisdev246:8080/sbs-fhir-cdr/data/metadata",
    "http://lpv-ecisdev246:8080/sbs-fhir-example/data/metadata",
    "https://fhir-open.sandboxcernerpowerchart.com/may2015/d075cf8b-3261-481d-97e5-ba6c48d3b41f/metadata"
];
//# sourceMappingURL=selector-static-list.component.js.map