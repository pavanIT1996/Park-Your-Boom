import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dopayment } from '../dopayment/dopayment';
import { Paymenthistory } from '../paymenthistory/paymenthistory';
import { Paymentreport } from '../paymentreport/paymentreport';

/**
 * Generated class for the Payment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class Payment {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Payment');
  }

nextdopayment(){
    this.navCtrl.push(Dopayment);
  }
  nextpayhistory(){
    this.navCtrl.push(Paymenthistory);
  }
  nextpayreport(){
    this.navCtrl.push(Paymentreport);
  }
}
