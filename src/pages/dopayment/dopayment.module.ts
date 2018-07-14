import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Dopayment } from './dopayment';

@NgModule({
  declarations: [
    Dopayment,
  ],
  imports: [
    //IonicModule.forChild(Dopayment),
  ],
  exports: [
    Dopayment
  ]
})
export class DopaymentModule {}
