import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminMap } from './admin-map';

@NgModule({
  declarations: [
    AdminMap,
  ],
  imports: [
   // IonicModule.forChild(AdminMap),
  ],
  exports: [
    AdminMap
  ]
})
export class AdminMapModule {}
