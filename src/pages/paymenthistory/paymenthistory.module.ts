import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Paymenthistory } from './paymenthistory';

@NgModule({
  declarations: [
    Paymenthistory,
  ],
  imports: [
    //IonicModule.forChild(Paymenthistory),
  ],
  exports: [
    Paymenthistory
  ]
})
export class PaymenthistoryModule {}
