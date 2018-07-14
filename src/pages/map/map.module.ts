import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Map } from './map';

@NgModule({
  declarations: [
    Map,
  ],
  imports: [
    //IonicModule.forChild(Map),
  ],
  exports: [
    Map
  ]
})
export class MapModule {}
