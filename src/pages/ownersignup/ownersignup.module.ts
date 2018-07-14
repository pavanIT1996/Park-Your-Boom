import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Ownersignup } from './ownersignup';

@NgModule({
  declarations: [
    Ownersignup,
  ],
  imports: [
    //IonicModule.forChild(Ownersignup),
  ],
  exports: [
    Ownersignup
  ]
})
export class OwnersignupModule {}
