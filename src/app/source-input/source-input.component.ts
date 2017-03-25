import {Component, OnInit} from "@angular/core";
import {MetadataFetchService} from "../core/metadata-fetch.service";

@Component({
  selector: 'app-source-input',
  templateUrl: './source-input.component.html',
  styleUrls: ['./source-input.component.css']
})
export class SourceInputComponent implements OnInit {

  constructor(private metadataFetchService: MetadataFetchService) {
  }

  metadataSourceUrl: string;

  go() {
    this.metadataFetchService.updateSourceUrl(this.metadataSourceUrl);
  }

  ngOnInit() {
  }
}
