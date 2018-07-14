import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Mapshow } from '../mapshow/mapshow';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { Yourtravels } from '../yourtravels/yourtravels';


/**
 * Generated class for the TodayTravelList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-today-travel-list',
  templateUrl: 'today-travel-list.html',
})
export class TodayTravelList {

 travelList: FirebaseListObservable<any>;
 time:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFire) {
        this.travelList = af.database.list('/travelList');
        this.pickCapacity();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodayTravelList');
  }

viewlist(){
  this.navCtrl.push(Yourtravels);
}

pickCapacity(){
  this.travelList = this.af.database.list('/travelList', {
    query: {
      orderByChild: 'time',
  }
  });
 
}
  
/// viewlist(){
   // this.navCtrl.push(Mapshow);
  //}
}
