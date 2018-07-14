import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { SelectVehicleType } from './select-vehicle-type';


@NgModule({
  declarations: [
    SelectVehicleType,
  ],
  imports: [
    //IonicModule.forChild(SelectVehicleType),
  ],
  exports: [
    SelectVehicleType
  ]
})
export class SelectVehicleTypeModule {}
