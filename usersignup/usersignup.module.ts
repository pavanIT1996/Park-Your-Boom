import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Usersignup } from './usersignup';

@NgModule({
  declarations: [
    Usersignup,
  ],
  imports: [
    //IonicModule.forChild(Usersignup),
  ],
  exports: [
    Usersignup
  ]
})
export class UsersignupModule {}
