import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {  AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
var parameter1;
/**
 * Generated class for the Map page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-adminreservation',
  templateUrl: 'adminreservation.html',
})
export class Adminreservation {
 reservations: FirebaseListObservable<any>;
 
  constructor(public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController, public navCtrl: NavController,public navParams: NavParams, public af: AngularFire) {
this.reservations = af.database.list('/reservations'); 

  parameter1 = navParams.get('param1');
    this.select(parameter1);
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
        handler: data => {if(data.title=="" || data.subTitle==""){
            this.showADDErrorAlert();
        }else{
          this.reservations.push({
            title: data.title,
            subTitle: data.subTitle,
            id:parameter1
          });
        }
      }}
    ]
  });
  prompt.present();
}
removereservation(reservationId: string){
  this.reservations.remove(reservationId);
}

//Add Unsuccessfull Alert
   showADDErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Enter the All Values',
      buttons: ['OK']
    });
    
    alert.present();
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

select(parameter1){
  console.log("parameter1");
  this.reservations= this.af.database.list('/reservations',{
    query:{
      orderByChild:'id',
      equalTo:parameter1

    }
  })

}

}