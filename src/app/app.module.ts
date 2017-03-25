import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import "hammerjs";
import {CoreModule} from "./core/core.module";
import {FhirscopeMetadataModule} from "./fhirscope-metadata/fhirscope-metadata.module";
import {AppComponent} from "./app.component";
import {SourceSelectComponent} from "./source-select/source-select.component";
import {SourceInputComponent} from "./source-input/source-input.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    SourceSelectComponent,
    SourceInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    MaterialModule,
    FhirscopeMetadataModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
