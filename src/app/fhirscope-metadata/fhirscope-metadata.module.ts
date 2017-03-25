import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';

import {MetadataBaseComponent} from './metadata-base/metadata-base.component';
import {MetadataRestComponent} from "./metadata-rest/metadata-rest.component";
import {FhirscopeMetadataComponent} from "./fhirscope-metadata.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [FhirscopeMetadataComponent, MetadataBaseComponent, MetadataRestComponent],
  exports: [FhirscopeMetadataComponent]
})
export class FhirscopeMetadataModule {
}
