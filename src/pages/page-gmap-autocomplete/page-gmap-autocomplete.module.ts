import { NgModule } from '@angular/core';
//import { IonicPageModule } from 'ionic-angular';
import { PageGmapAutocomplete } from './page-gmap-autocomplete';

@NgModule({
  declarations: [
    PageGmapAutocomplete,
  ],
  imports: [
    //IonicPageModule.forChild(PageGmapAutocomplete),
  ],
  exports: [
    PageGmapAutocomplete
  ]
})
export class PageGmapAutocompleteModule {}
