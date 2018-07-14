import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Addnewtravel } from '../addnewtravel/addnewtravel';
import { Yourtravels } from '../yourtravels/yourtravels';
import { TodayTravelList } from '../today-travel-list/today-travel-list';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {Platform, Alert} from 'ionic-angular';

import {BarcodeScanner} from '@ionic-native/barcode-scanner';


/**
 * Generated class for the Travellist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travellist',
  templateUrl: 'travellist.html',
})
export class Travellist {

 travelList: FirebaseListObservable<any>;
   private barcodeText:String;
   private barcodeFormat:String;
   private platform:Platform;   
   private navController:NavController;
   value:any;


  constructor( public actionSheetCtrl:ActionSheetController,   
  public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController, 
  public af: AngularFire,platform: Platform,public barcodeScanner: BarcodeScanner) {
    this.travelList = af.database.list('/travelList');

    this.platform = platform;
    this.navController = navCtrl;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Travellist');
  }
nextnewtrvallist(){
    this.navCtrl.push(Addnewtravel);
}
nextyourtraval(){
    this.navCtrl.push(Yourtravels)
    
}

nextsave(){
  this.navCtrl.push(TodayTravelList);
}

showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Add Travels',
      message: "Enter the place",
      inputs: [
        {
          name: 'place',
          placeholder: 'Place'
        },

        {
          name: 'date',
          placeholder: 'Date',
          type:'date'

        },

        {
          name: 'time',
          placeholder: 'Time',
          type:'time'
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
          if(data.place=="" || data.date=="" || data.time==""){
            this.showADDErrorAlert() ;
          }else{
            this.travelList.push({
              place:data.place,
              date:data.date,
              time:data.time

            });
            this.showADDSuccessAlert();
          }
          }
        }


      ]
    });
    prompt.present();
  }


 showADDErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Please Enter the All Values',
      buttons: ['OK']
    });
    alert.present();
  }

  showADDSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Added',
      buttons: ['OK']
    });
    alert.present();
  }

  showUpdateSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Updated',
      buttons: ['OK']
    });
    alert.present();
  }

  showRemoveSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Removed',
      buttons: ['OK']
    });
    alert.present();
  }
//removetravelList(travelListId:string){
 // presentConfirm(travelListId:string);
  //this.travelList.remove(travelListId);
//}

updatetravelList(travelListId,  travelListPlace,travelListDate, travelListTime){
  let prompt = this.alertCtrl.create({
    title: 'Update Travel',
    message: "Update the Travel",
    inputs: [
      {
        name:'place',
        placeholder: 'Place',
        value:travelListPlace
        },

        {
          name: 'date',
          placeholder: 'Date',
          type:'date',
          value:travelListDate
        },

        {
          name: 'time',
          placeholder: 'Time',
          type:'time',
          value:travelListTime
        },

      
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: date => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
         handler: data => {
            this.travelList.update(travelListId, {
              place:data.place,
              date:data.date,
              time:data.time

            });
            this.showUpdateSuccessAlert();
         }
      }
    ]
  });
prompt.present();
}

showOptions(travelListId,  travelListPlace,travelListDate, travelListTime){
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want?',

    buttons:[
      {
        text: 'Delete Travel',
        role: 'destuctive',
        icon: 'trash',
        handler: () => {
         // this.removetravelList(travelListId);
         this.removetravelList(travelListId);
        }
      },
      {
        text:'Update Travel',
        icon: 'create',
        handler: () => {
          this.updatetravelList(travelListId,  travelListPlace,travelListDate, travelListTime);
        }
      },
      {
        text:'Cancel',
        role:'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();

}


removetravelList(travelListId:string) {
  let alert = this.alertCtrl.create({
    title: 'Delete',
    message: 'Do you want to delete this?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Delete',
        handler: () => {
          console.log('Delete clicked');
          this.travelList.remove(travelListId);
          this.showRemoveSuccessAlert() 
        }
      }
    ]
  });
  alert.present();
}

click() {
      this.barcodeScanner.scan()
      .then((result) => {
        alert(
          "We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled
        )
      })
      .catch((error) => {
        alert(error);
      })
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
 

}