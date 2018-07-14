import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Admin } from './admin';

@NgModule({
  declarations: [
    Admin,
  ],
  imports: [
   // IonicModule.forChild(Admin),
  ],
  exports: [
    Admin
  ]
})
export class AdminModule {}
