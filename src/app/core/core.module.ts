import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MetadataFetchService} from './metadata-fetch.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [MetadataFetchService]
})
export class CoreModule {
}
