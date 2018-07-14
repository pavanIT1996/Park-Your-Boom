import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Reservation } from './reservation';

@NgModule({
  declarations: [
    Reservation,
  ],
  imports: [
    //IonicModule.forChild(Payment),
  ],
  exports: [
    Reservation
  ]
})
export class ReservationModule {}