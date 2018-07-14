import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Parkingdetails } from './parkingdetails';

@NgModule({
  declarations: [
    Parkingdetails,
  ],
  imports: [
    //IonicModule.forChild(Parkingdetails),
  ],
  exports: [
    Parkingdetails
  ]
})
export class ParkingdetailsModule {}
