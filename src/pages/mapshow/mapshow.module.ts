import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Mapshow } from './mapshow';

@NgModule({
  declarations: [
    Mapshow,
  ],
  imports: [
    //IonicModule.forChild(Mapshow),
  ],
  exports: [
    Mapshow
  ]
})
export class MapshowModule {}
