import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SendSms } from './send-sms';

@NgModule({
  declarations: [
    SendSms,
  ],
  imports: [
    //IonicModule.forChild(SendSms),
  ],
  exports: [
    SendSms
  ]
})
export class SendSmsModule {}
