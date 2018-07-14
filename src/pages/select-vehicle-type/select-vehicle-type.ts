import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SessionTimer } from '../session-timer/session-timer';
import { Payment } from '../payment/payment';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



/**
 * Generated class for the SelectVehicleType page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-select-vehicle-type',
  templateUrl: 'select-vehicle-type.html',
})
export class SelectVehicleType {

 ParkingDetail: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public af:AngularFire) {
     this.ParkingDetail = af.database.list('/ParkingDetail');
    
  }

  showAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Do you agree to start the session timer?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.push(Payment);
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(SessionTimer);
          }
        }
      ]
    });
    confirm.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectVehicleType');
  }

}
