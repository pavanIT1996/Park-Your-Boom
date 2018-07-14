import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Travellist } from '../travellist/travellist';
import { TodayTravelList } from '../today-travel-list/today-travel-list';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/**
 * Generated class for the Addnewtravel page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addnewtravel',
  templateUrl: 'addnewtravel.html',
})
export class Addnewtravel {

travelList: FirebaseListObservable<any>;
todayTravellist: FirebaseListObservable<any>;

today;
public date:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFire) {
    this.travelList = af.database.list('/travelList');
    this.todayTravellist = af.database.list('/todayTravellist');
      //this.today = new Date().toISOString();
      this.today=new Date().toLocaleString();
   
  
      
  }


/*

backtotravel(place,date,time){
    this.todayTravellist.push({
      place:place,
      
    });*/
    backtotravel(){
    this.navCtrl.push(TodayTravelList);


    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Addnewtravel');
  }


texting(date){
  this.showTodayTravel(date)
  
}


showTodayTravel(date:string){
  //var currentDate='2017-05-12';
  this.travelList = this.af.database.list('/travelList',{
    
    query:{
      orderByChild:'date',
      equalTo:date
    }
  });

  }
 

}
