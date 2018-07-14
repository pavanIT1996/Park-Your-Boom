import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Adminmap } from './adminmap';

@NgModule({
  declarations: [
    Adminmap,
  ],
  imports: [
    //IonicModule.forChild(Map),
  ],
  exports: [
    Adminmap
  ]
})
export class AdminmapModule {}
