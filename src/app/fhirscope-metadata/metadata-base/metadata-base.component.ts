import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'metadata-base',
  templateUrl: 'metadata-base.component.html',
  styleUrls: ['metadata-base.component.css']
})
export class MetadataBaseComponent implements OnInit, OnChanges {

  @Input()
  metadata;

  private _metadataProcessed: any;
  private errorMessage: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.processMetadata();
  }

  ngOnInit() {

  }

  private processMetadata() {
    if (!this.metadata) {
      this.errorMessage = null;
      this._metadataProcessed = null;
    }
    else if (!this.metadata.fhirVersion) {
      this.errorMessage = "Invalid conformance statement, must contain a fhir version.";
      this._metadataProcessed = null;
    } else {
      this.errorMessage = null;
      this._metadataProcessed = this.metadata;
    }
  }
}
