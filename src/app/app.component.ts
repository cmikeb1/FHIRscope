import {Component, OnInit, OnDestroy} from "@angular/core";
import {MetadataFetchService} from "./core/metadata-fetch.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  metadataSourceUrlSub: Subscription;
  metadata;
  errorMessage = '';

  constructor(private metadataFetchService: MetadataFetchService) {
  }

  ngOnInit(): void {
    this.metadataSourceUrlSub = this.metadataFetchService.metadataUrl$.subscribe((value) => this.sourceChanged());
  }

  sourceChanged() {
    this.metadataFetchService.fetchMetadataForCurrentSource()
      .subscribe(
        metadata => this.updateMetadata(metadata),
        error => this.errorMessage = error
      );
  }

  private updateMetadata(metadata){
    this.errorMessage = null;
    this.metadata = metadata;
  }

  ngOnDestroy(): void {
    this.metadataSourceUrlSub.unsubscribe();
  }
}
