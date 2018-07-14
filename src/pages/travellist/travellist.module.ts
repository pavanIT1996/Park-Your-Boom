import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Travellist } from './travellist';


@NgModule({
  declarations: [
    Travellist,
  ],
  imports: [
    //IonicModule.forChild(Travellist),
  ],
  exports: [
    Travellist
  ]
})
export class TravellistModule {}
