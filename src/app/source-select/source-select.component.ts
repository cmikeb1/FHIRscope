import {Component, OnInit} from "@angular/core";
import {MetadataSource} from "../core/metadata-source.model";
import {MetadataFetchService} from "../core/metadata-fetch.service";

@Component({
  selector: 'app-source-select',
  templateUrl: './source-select.component.html',
  styleUrls: ['./source-select.component.css']
})
export class SourceSelectComponent implements OnInit {

  metadataSources: MetadataSource[];

  private _currentSourceUrl: string;

  constructor(private metadataFetchService: MetadataFetchService) {
  }

  sourceChanged(metadataSourceUrl) {
    this._currentSourceUrl = metadataSourceUrl;
    this.metadataFetchService.updateSourceUrl(metadataSourceUrl);
  }

  ngOnInit() {
    this.getMetadataSources();
  }

  getMetadataSources(): void {
    this.metadataSources = MetadataFetchService.getMetadataSources();
  }

}
