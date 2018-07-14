import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Findlocation } from './findlocation';

@NgModule({
  declarations: [
    Findlocation,
  ],
  imports: [
    //IonicModule.forChild(Findlocation),
  ],
  exports: [
    Findlocation
  ]
})
export class FindlocationModule {}
