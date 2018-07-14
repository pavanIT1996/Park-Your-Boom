import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Newslot } from './newslot';

@NgModule({
  declarations: [
    Newslot,
  ],
  imports: [
    //IonicModule.forChild(Newslot),
  ],
  exports: [
    Newslot
  ]
})
export class NewslotModule {}
