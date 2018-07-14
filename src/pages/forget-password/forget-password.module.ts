import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { ForgetPassword } from './forget-password';

@NgModule({
  declarations: [
    ForgetPassword,
  ],
  imports: [
    //IonicModule.forChild(ForgetPassword),
  ],
  exports: [
    ForgetPassword
  ]
})
export class ForgetPasswordModule {}
