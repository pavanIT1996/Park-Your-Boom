import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {  AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the Map page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-slot-owner-updatetype',
  templateUrl: 'slot-owner-updatetype.html',
})
export class SlotOwnerUpdatetype {

 
 reservations: FirebaseListObservable<any>;
 
 constructor(   public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController, public navCtrl: NavController, af: AngularFire) {
  this.reservations = af.database.list('/reservations');
}




updatereservation(reservationId, reservationTitle){
  let prompt = this.alertCtrl.create({
    title: 'reservation url',
    message: "Update the reserversion",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: reservationTitle
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.reservations.update(reservationId, {
            title: data.title
          });
        }
      }
    ]
  });
  prompt.present();
}
showOptions(reservationId, reservationTitle) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    
    buttons: [
      {
        text: 'Update title',
        handler: () => {
          this.updatereservation(reservationId, reservationTitle);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}



}

