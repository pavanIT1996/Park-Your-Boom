import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Owner } from './owner';

@NgModule({
  declarations: [
    Owner,
  ],
  imports: [
   // IonicModule.forChild(Admin),
  ],
  exports: [
    Owner
  ]
})
export class OwnerModule {}
