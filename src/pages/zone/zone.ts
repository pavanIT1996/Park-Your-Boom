import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {  AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
@Component({
  selector: 'page-zone',
  templateUrl: 'zone.html'
})
export class Pagezone {
reservations: FirebaseListObservable<any>;
 
 constructor(   public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController, public navCtrl: NavController, af: AngularFire) {
  this.reservations = af.database.list('/reservations');
}

addreservation(){
  let prompt = this.alertCtrl.create({
    title: 'Enter reservation type',
    subTitle: 'Enter reservation url',
    

    
    message: "Enter a reservation slot url",
    inputs: [
      {
        name: 'title',        
        placeholder: 'reservation type',
      },
      {
        name: 'subTitle',        
        placeholder: 'url',
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
          this.reservations.push({
            title: data.title,
            subTitle: data.subTitle
          });
        }
      }
    ]
  });
  prompt.present();
}
removereservation(reservationId: string){
  this.reservations.remove(reservationId);
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
        text: 'Delete reservation',
        role: 'destructive',
        handler: () => {
          this.removereservation(reservationId);
        }
      },{
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
