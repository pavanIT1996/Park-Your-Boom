import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Yourtravels } from './yourtravels';

@NgModule({
  declarations: [
    Yourtravels,
  ],
  imports: [
    //IonicModule.forChild(Yourtravels),
  ],
  exports: [
    Yourtravels
  ]
})
export class YourtravelsModule {}
