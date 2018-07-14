import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Paymentreport } from './paymentreport';

@NgModule({
  declarations: [
    Paymentreport,
  ],
  imports: [
    //IonicModule.forChild(Paymentreport),
  ],
  exports: [
    Paymentreport
  ]
})
export class PaymentreportModule {}
