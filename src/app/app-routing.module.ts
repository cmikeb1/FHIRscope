import {Routes, RouterModule} from "@angular/router";
import {SourceInputComponent} from "./source-input/source-input.component";
import {SourceSelectComponent} from "./source-select/source-select.component";
import {NgModule} from "@angular/core";


const appRoutes: Routes = [
  {
    path: 'source-input',
    component: SourceInputComponent,
    data: {
      metadataSourceUrl: ""
    }
  },
  {
    path: 'source-select',
    component: SourceSelectComponent,
    data: {
      metadataSourceUrl: ""
    }
  },
  {
    path: '',
    redirectTo: '/source-select',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/source-select'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
