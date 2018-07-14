import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController ,ModalController} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { Pagezone } from '../zone/zone';

import { Newslot } from '../newslot/newslot';
/**
 * Generated class for the AdminSlot page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-payment',
  templateUrl: 'admin-payment.html',
})
export class AdminPayment {

  

  Payment: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFire,public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,public modalCtrl: ModalController) {
     this.Payment = af.database.list('/Payment');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminSlot');
  }




}
