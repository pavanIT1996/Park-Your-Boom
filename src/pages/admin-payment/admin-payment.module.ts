import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminPayment} from './admin-payment';

@NgModule({
  declarations: [
    AdminPayment,
  ],
  imports: [
  //  IonicModule.forChild(AdminSlot),
  ],
  exports: [
    AdminPayment
  ]
})
export class AdminSlotModule {}
