import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Navi } from './navi';

@NgModule({
  declarations: [
    Navi,
  ],
  imports: [
    //IonicModule.forChild(Map),
  ],
  exports: [
    Navi
  ]
})
export class NaviModule {}
