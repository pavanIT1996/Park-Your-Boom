import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { TodayTravelList } from './today-travel-list';

@NgModule({
  declarations: [
    TodayTravelList,
  ],
  imports: [
   // IonicModule.forChild(TodayTravelList),
  ],
  exports: [
    TodayTravelList
  ]
})
export class TodayTravelListModule {}
