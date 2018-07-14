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
  selector: 'page-admin-slot',
  templateUrl: 'admin-slot.html',
})
export class AdminSlot {

  public AddressVal: any;
  SlotDetails:any;
  public err:any;

  public prompt:any;
  public District:any;
  public City:any;
  public Type:any;
  public Capacity:any;
  public stime:any;
  public etime:any;

  Newslot: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFire,public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController,public modalCtrl: ModalController) {
     this.Newslot = af.database.list('/Newslot');
     this.SlotDetails="SlotDetails";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminSlot');
  }

 

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

   nextZone(){
    this.navCtrl.push(Pagezone);
  }

//Add a New slot using Model
add(){
  let prompt = this.modalCtrl.create(Newslot);
  prompt.present();
}

//Add a New Slot
/*addNewslot(){
  let prompt = this.alertCtrl.create({
    title: 'Slot Details',
    message:'', 
    //inputs
    inputs :[
      {
        name: 'District',
        placeholder: 'District',
      },
  
      {
        name: 'City',
        placeholder: 'City',
      },

      {
        name: 'Address',
        placeholder: 'Address',
      },

      {
        name: 'Type',
        placeholder: 'Type',
      },

      {
        name: 'Row',
        placeholder: 'Row',
      },

      {
        name: 'Col',
        placeholder: 'Col',
      },

      {
        name: 'Capacity',
        placeholder: 'Capacity',
      },

      {
        name: 'StartTime',
        placeholder: 'StartTime',
      },

      {
        name: 'EndTime',
        placeholder: 'EndTime',
      },
      {
        name: 'CoverSlot',
        placeholder: 'CoverSlot',
      },
      {
        name: 'GoodSurface',
        placeholder: 'GoodSurface',
      },
      {
        name: 'NearCity',
        placeholder: 'NearCity',
      },
      {
        name: 'Security',
        placeholder: 'Security',
      },
      {
        name: 'FairPrice',
        placeholder: 'FairPrice',
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
          try{
          this.Newslot.push({
            District: data.District,
            City: data.City,
            Address: data.Address,
            Type: data.Type,
            Row: data.Row,
            Col: data.Col,
            Capacity: data.Capacity,
            StartTime: data.StartTime,
            EndTime: data.EndTime,
            CoverSlot: data.CoverSlot,
            GoodSurface: data.GoodSurface,
            NearCity: data.NearCity,
            Security: data.Security,
            FairPrice: data.FairPrice
          });
          this.showADDSuccessAlert(); 
          }
          catch(Error)
          {
              this.showADDErrorAlert(); 
          }
        }
      }
    ]
  });
  prompt.present();
}*/


//Remove a Slot
removeSlot(NewslotId: string){
  let prompt = this.alertCtrl.create({
    title: 'Remove Confirmation',
    subTitle: NewslotId,
    message: "Do you want to Remove?",
    buttons: [
      {
        text: 'No',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: data => {
          try{
              this.Newslot.remove(NewslotId);
              this.showREMOVESuccessAlert();
          }
          catch(error)
          {
              this.showREMOVEErrorAlert();
          }
        }
      }
    ]
   });
  prompt.present();
}

//Get Location Details Values
 showOptions4(NewslotId, NewslotDistrict,NewslotCity,NewslotAddress) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete The Slot',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.removeSlot(NewslotId);
        }
      },{
        text: 'Update The Slot',
        icon: 'create',
        handler: () => {
          this.updateLocation(NewslotId, NewslotDistrict,NewslotCity,NewslotAddress);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

//Update Location Details Values
updateLocation(NewslotId, NewslotDistrict,NewslotCity,NewslotAddress){
  let prompt = this.alertCtrl.create({
    title:'Update',
    message: "Update the Location Details",
    inputs:  [
      {
        name: 'District',
        placeholder: 'District',
        value: NewslotDistrict,
      },
  
      {
        name: 'City',
        placeholder: 'City',
        value: NewslotCity,
        
      },

      {
        name: 'Address',
        placeholder: 'Address',
        value: NewslotAddress,
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
          try{
          this.Newslot.update(NewslotId, {
            District: data.District,
            City:data.City,
            Address:data.Address,
          });
          this.showUPDATESuccessAlert();
          }
          catch(error)
          {
              this.showUPDATEErrorAlert();
          }
        }
      }
    ]
  });
  prompt.present();
}


//Get Slot Details Values
  showOptions(NewslotId,NewslotType,NewslotRow,NewslotCol,NewslotStartTime,NewslotEndTime) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete The Slot',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.removeSlot(NewslotId);
        }
      },{
        text: 'Update The Slot',
        icon: 'create',
        handler: () => {
          this.updateSlot(NewslotId,NewslotType,NewslotRow,NewslotCol,NewslotStartTime,NewslotEndTime);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}


//Update Slot Details Values
updateSlot(NewslotId,NewslotType,NewslotRow,NewslotCol,NewslotStartTime,NewslotEndTime){
  let prompt = this.alertCtrl.create({
    title:'Update',
    message: "Update the Slot Details",

    inputs:  [

      {
        name: 'Type',
        placeholder: 'Type',
        value: NewslotType
      },

      {
        name: 'Row',
        placeholder: 'Row',
        value: NewslotRow
      },

      {
        name: 'Col',
        placeholder: 'Col',
        value: NewslotCol
      },
      {
        name: 'StartTime',
        placeholder: 'StartTime',
        value: NewslotStartTime
      },

      {
        name: 'EndTime',
        placeholder: 'EndTime',
        value: NewslotEndTime
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
          try{
          this.Newslot.update(NewslotId, {
            Type:data.Type,
            Row:data.Row,
            Col:data.Col,
            Capacity:data.Row * data.Col,
            StartTime:data.StartTime,
            EndTime:data.EndTime
          });
          this.showUPDATESuccessAlert();
          }
          catch(error)
          {
              this.showUPDATEErrorAlert();
          }
        }
      }
    ]
  });
  prompt.present();
}


//Get Slot Facility Details
showOptions2(NewslotId, NewslotCoverSlot,NewslotGoodSurface,NewslotNearCity,NewslotSecurity,NewslotFairPrice){
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    
    buttons: [
      {
        text: 'Delete The Slot',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.removeSlot(NewslotId);
        }
      },{
        text: 'Update The Slot',
        icon: 'create',
        handler: () => {
          this.updateFacility(NewslotId,NewslotCoverSlot,NewslotGoodSurface,NewslotNearCity,NewslotSecurity,NewslotFairPrice);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

//Update the Facility Details
updateFacility(NewslotId,NewslotCoverSlot,NewslotGoodSurface,NewslotNearCity,NewslotSecurity,NewslotFairPrice){
  let prompt = this.alertCtrl.create({
    title: 'Facility Details',
    message: "Update the Faciility Details",
    inputs: [
      {
        name: 'CoverSlot',
        placeholder: 'CoverSlot',
        value: NewslotCoverSlot
      },
      {
        name: 'GoodSurface',
        placeholder: 'GoodSurface',
        value: NewslotGoodSurface
      },
      {
        name: 'NearCity',
        placeholder: 'NearCity',
        value: NewslotNearCity
      },
      {
        name: 'Security',
        placeholder: 'Security',
        value: NewslotSecurity
      },
      {
        name: 'FairPrice',
        placeholder: 'FairPrice',
        value: NewslotFairPrice
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
          try{
          this.Newslot.update(NewslotId, {
            CoverSlot: data.CoverSlot,
            GoodSurface: data.GoodSurface,
            NearCity: data.NearCity,
            Security: data.Security,
            FairPrice: data.FairPrice
          });
          this.showUPDATESuccessAlert();
          }
          catch(error)
          {
              this.showUPDATEErrorAlert();
          }
        }
      }
    ]
  });
  prompt.present();
}


//Get the Rate Details
showOptions3(NewslotId,NewslotBikePrice,NewslotTukPrice,NewslotCarPrice,NewslotVanPrice){
 let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    
    buttons: [
      {
        text: 'Delete The Slot',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.removeSlot(NewslotId);
        }
      },{
        text: 'Update The Slot',
        icon: 'create',
        handler: () => {
          this.updateRate(NewslotId,NewslotBikePrice,NewslotTukPrice,NewslotCarPrice,NewslotVanPrice);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}


//Update the Rate Details
updateRate(NewslotId,NewslotBikePrice,NewslotTukPrice,NewslotCarPrice,NewslotVanPrice){
  let prompt = this.alertCtrl.create({
    title: 'Rate Details',
    message: "Update the Rate Details",
    inputs: [
      {
        name: 'BikePrice',
        placeholder: 'BikePrice',
        value: NewslotBikePrice
      },
      {
        name: 'TukPrice',
        placeholder: 'TukPrice',
        value: NewslotTukPrice
      },
      {
        name: 'CarPrice',
        placeholder: 'CarPrice',
        value: NewslotCarPrice
      },
      {
        name: 'VanPrice',
        placeholder: 'VanPrice',
        value: NewslotVanPrice
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
          try{
          this.Newslot.update(NewslotId, {
            BikePrice: data.BikePrice,
            TukPrice: data.TukPrice,
            CarPrice: data.CarPrice,
            VanPrice: data.VanPrice,
          });
          this.showUPDATESuccessAlert();
          }
          catch(error)
          {
              this.showUPDATEErrorAlert();
          }
        }
      }
    ]
  });
  prompt.present();
}

//Add Successfull Alert
 showADDSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Added',
      buttons: ['OK']
    });
    alert.present();
  }
//Add Unsuccessfull Alert
   showADDErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Add Unsuccessfull',
      buttons: ['OK']
    });
    
    alert.present();
  }

//Update Successfull Alert
 showUPDATESuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Updated',
      buttons: ['OK']
    });
    alert.present();
  }
//Update Unsuccessfull Alert
   showUPDATEErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Update Unsuccessfull',
      buttons: ['OK']
    });
    
    alert.present();
  }


//Remove Successfull Alert
 showREMOVESuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Removed',
      buttons: ['OK']
    });
    alert.present();
  }
//Remove Unsuccessfull Alert
   showREMOVEErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Removed Unsuccessfull',
      buttons: ['OK']
    });
    
    alert.present();
  }


//Search All
pickAll(){
  this.Newslot = this.af.database.list('/Newslot', {
    query: {
      orderByChild: 'key',
    }
  });
  this.clear();
}

//Clear All
clear(): void {
  this.District = [];
  this.City = [];
  this.Type = [];
  this.Capacity = []; 
  this.stime = [];
  this.etime = [];
}

//Search District
pickDistrict(District: string){
  this.Newslot = this.af.database.list('/Newslot', {
    query: {
      orderByChild: 'District',
      equalTo: District
    }
  });
}

//Search City
pickCity(City: string){
  this.Newslot = this.af.database.list('/Newslot', {
    query: {
      orderByChild: 'City',
      equalTo: City
    }
  });
}

//Search Type
pickType(Type: string){
  this.Newslot = this.af.database.list('/Newslot', {
    query: {
      orderByChild: 'Type',
      equalTo: Type
    }
  });
}

//Search Type
pickCapacity(Capacity: string){
  if(Capacity != " ")
  {
  this.Newslot = this.af.database.list('/Newslot', {
    query: {
      orderByChild: 'Capacity',
      equalTo: parseInt(Capacity)
  }
  });
  }
}

//Search StartTime
pickStime(Stime: string){
  this.Newslot = this.af.database.list('/Newslot', {
    query: {
      orderByChild: 'StartTime',
      equalTo: Stime
    }
  });
}

//Search EndTime
pickEtime(Etime: string){
  this.Newslot = this.af.database.list('/Newslot', {
    query: {
      orderByChild: 'EndTime',
      equalTo: Etime
    }
  });
}



}
