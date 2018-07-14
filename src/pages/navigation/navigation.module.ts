import { NgModule } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { Navigation } from './navigation';

@NgModule({
  declarations: [
    Navigation,
  ],
  imports: [
    //IonicModule.forChild(Map),
  ],
  exports: [
    Navigation
  ]
})
export class NavigationModule {}
