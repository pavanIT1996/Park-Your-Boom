import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import{AlertController} from 'ionic-angular';
/**
 * Generated class for the Paymenthistory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-paymenthistory',
  templateUrl: 'paymenthistory.html',
})


export class Paymenthistory {
  SessionTimers:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams,public af: AngularFire) {
    this.SessionTimers = af.database.list('/SessionTimer');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Paymenthistory');
  }

  //history delete successfull

  showRemoveSuccess(){
    let alert =this.alertCtrl.create({
      title:'',
      subTitle:'Successfully Removed',
      buttons:['OK']
    });
    alert.present();
  }

  //history delete unsuccessfull

  showRemoveUnsuccess(){
    let alert =this.alertCtrl.create({
      title:'',
      subTitle:'Removed Unsuccessfull',
      buttons:['OK']
    });
    alert.present();
  }

//delete History
    deletehistory():void{
    let prompt = this.alertCtrl.create({
      title: 'Delete History',
      buttons:[
        {
          text:"Cancel",
          handler:data =>{
            console.log("cancel clicked");
          }
        },
        {
          text:"Delete History",
          handler: data =>{
            try{
               this.SessionTimers.remove(); 
               this.showRemoveSuccess();
            }
            catch(error){
              this.showRemoveUnsuccess();
            }
                
            
          }
        }
      ]
    })
  }

}
