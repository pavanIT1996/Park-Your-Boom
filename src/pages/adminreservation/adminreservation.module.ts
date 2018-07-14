import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Adminreservation } from './adminreservation';

@NgModule({
  declarations: [
    Adminreservation,
  ],
  imports: [
    //IonicModule.forChild(Map),
  ],
  exports: [
    Adminreservation
  ]
})
export class AdminreservationModule {}
