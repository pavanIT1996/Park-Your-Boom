import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {  AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { SessionTimer } from '../session-timer/session-timer';



import {BarcodeScanner} from '@ionic-native/barcode-scanner';

var parameter1;
var test = "available";
//var til = 'Reseved';
/**
 * Generated class for the Map page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var testing="hello";
@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class Reservation {

 
  reservations: FirebaseListObservable<any>;
  travelList: FirebaseListObservable<any>;
   private barcodeText:String;
   private barcodeFormat:String;
   private platform:Platform;   
   private navController:NavController;
   value:any;
 
 constructor(   public actionSheetCtrl: ActionSheetController,public navParams: NavParams,
 public alertCtrl: AlertController, public navCtrl: NavController,public af: AngularFire,
 platform: Platform,public barcodeScanner: BarcodeScanner) {
  this.reservations = af.database.list('/reservations');


    this.platform = platform;
    this.navController = navCtrl;
  parameter1 = navParams.get('param');
    this.select(parameter1);
}


 encode2(value){
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, value)
    .then((result)=>{
         alert(result);
    })
    .catch((error)=>{
      alert(error);
    })
  }
 


/*updatereservation(reservationId, reservationTitle) {

  let alert = this.alertCtrl.create({
    title: 'Confirm Reservation',
    message: 'Are you sure reservation?',
    
    inputs: [
      {
        name: 'title',
        placeholder: 'Reserved',
        value: reservationTitle
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
          
        text: 'Reserve',
        handler: data => {
          this.reservations.update(reservationId, {
            title: data.title
      });
    }
      }
    ]
  });
  alert.present();
}*/

presentConfirm(reservationId, reservationTitle) {
  let alert = this.alertCtrl.create({
    title: 'Confirm Reserve',
    message: 'Do you want to reserve this parking slot?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Reserve',
        handler: () => {
          var til = 'Reserved';
          this.reservations.update(reservationId, {
            title: til
            
        })
        this.navCtrl.push(SessionTimer);
        this.encode2("test");
      }
      }]
  });
  alert.present();
}
select(parameter1){
  console.log("parameter1",test);
  this.reservations= this.af.database.list('/reservations',{
    query:{
      orderByChild:'id',
      equalTo:parameter1

    }
  })

}


}