import { SelectVehicleType } from './../select-vehicle-type/select-vehicle-type';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Dopayment } from '../dopayment/dopayment';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Navi } from '../navi/navi';
import { Navigation } from '../navigation/navigation';
import { Reservation } from '../reservation/reservation';
var parameter1;
var lat12;
var lng12;
/**
 * Generated class for the Parkingdetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-parkingdetails',
  templateUrl: 'parkingdetails.html',
})
export class Parkingdetails {
  panorama:any;
  ParkingDetail: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public af:AngularFire) {
    this.ParkingDetail = af.database.list('/ParkingDetail');
    parameter1 = navParams.get('param1');
    this.select(parameter1);

    if(parameter1 == 1){
      lat12 = 6.914696;
      lng12 = 79.972161;
    }else if(parameter1 == 2){
      lat12 = 6.911496;
      lng12 = 79.971933;
    }else if(parameter1 == 5){
      lat12 = 6.917322;
      lng12 = 79.973696;
    }else if(parameter1 == 6){
      lat12 = 6.912588;
      lng12 = 79.972143;
    }else if(parameter1 == 3){
      lat12 = 6.923739;
      lng12 = 79.977988;
    }else{

    }
    const that = this;
   setTimeout(function(){
    that.streetview();
    
   },2000)

  }

  ionViewDidLoad() {
    console.log(parameter1);
    console.log('ionViewDidLoad Parkingdetails');
    
    
  }


streetview(){
 /* var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  // ...
}),*/
  this.panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'),
            {
              position: {lat:lat12, lng:lng12},
              pov: {heading: 165, pitch: 0},
              zoom: 1
            });
}

select(parameter1){
  console.log("parameter1");
  this.ParkingDetail= this.af.database.list('/ParkingDetail',{
    query:{
      orderByChild:'id',
      equalTo:parameter1
    }
   
  })

}
    

   reservation() {
     this.navCtrl.push(Reservation,{
              param:parameter1
            });
  
          }
  navi(){
    this.navCtrl.push(Navigation);
  }

}
