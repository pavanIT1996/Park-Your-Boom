import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { SessionTimer } from './session-timer';

@NgModule({
  declarations: [
    SessionTimer,
  ],
  imports: [
    //IonicModule.forChild(SessionTimer),
  ],
  exports: [
    SessionTimer
  ]
})
export class SessionTimerModule {}
