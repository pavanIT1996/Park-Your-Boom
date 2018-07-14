import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Addnewtravel } from './addnewtravel';

@NgModule({
  declarations: [
    Addnewtravel,
  ],
  imports: [
    //IonicModule.forChild(Addnewtravel),
  ],
  exports: [
    Addnewtravel
  ]
})
export class AddnewtravelModule {}
