import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { SlotOwnerUpdatetype } from '../slot-owner-updatetype/slot-owner-updatetype';

/**
 * Generated class for the Admin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-owner',
  templateUrl: 'owner.html',
})
export class Owner {
  Users: FirebaseListObservable<any>;
  Newslot: FirebaseListObservable<any>;
  Map: FirebaseListObservable<any>;
  Feedback: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,af:AngularFire,public loadingCtrl: LoadingController) {
    this.Users = af.database.list('/Users');
    this.Newslot = af.database.list('/Newslot');
    this.Map = af.database.list('/Map');
    this.Feedback = af.database.list('/Feedback');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Admin');
  }

  nextSlotOwnerUpdatetypepage(){
    this.navCtrl.push(SlotOwnerUpdatetype );
  }




  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

}
