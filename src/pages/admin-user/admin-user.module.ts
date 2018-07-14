import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AdminUser } from './admin-user';

@NgModule({
  declarations: [
    AdminUser,
  ],
  imports: [
  //  IonicModule.forChild(AdminUser),
  ],
  exports: [
    AdminUser
  ]
})
export class AdminUserModule {}
