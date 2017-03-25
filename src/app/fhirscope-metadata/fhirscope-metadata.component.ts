import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'fhirscope-metadata',
  templateUrl: './fhirscope-metadata.component.html',
  styleUrls: ['./fhirscope-metadata.component.css']
})
export class FhirscopeMetadataComponent implements OnInit {

  @Input()
  metadata;

  constructor() {
  }

  ngOnInit() {
  }
}
