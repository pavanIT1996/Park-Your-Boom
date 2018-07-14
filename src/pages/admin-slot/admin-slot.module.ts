import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminSlot } from './admin-slot';

@NgModule({
  declarations: [
    AdminSlot,
  ],
  imports: [
  //  IonicModule.forChild(AdminSlot),
  ],
  exports: [
    AdminSlot
  ]
})
export class AdminSlotModule {}
