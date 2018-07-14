import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Singupselect } from './singupselect';

@NgModule({
  declarations: [
    Singupselect,
  ],
  imports: [
    //IonicModule.forChild(Singupselect),
  ],
  exports: [
    Singupselect
  ]
})
export class SingupselectModule {}
