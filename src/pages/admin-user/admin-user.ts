import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {  AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
/**
 * Generated class for the AdminUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-user',
  templateUrl: 'admin-user.html',
})
export class AdminUser {
   Users: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFire ,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController) {
        this.Users = af.database.list('/Users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUser');
  }

addUser(){
  let prompt = this.alertCtrl.create({
    title: 'User Details',
    message: "Add User Details",
    inputs: [
      {
        name: 'Name',
        
        placeholder: 'Name'
      },
      {
        name: 'Email',
        
        placeholder: 'Email'
      },
      {
        name: 'Password',
        
        placeholder: 'Password'
      },
      {
        name: 'Type',
        
        placeholder: 'Type'
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
          this.Users.push({
            Name: data.Name,
            Email: data.Email,
            Password: data.Password,
            Type: data.Type
          });
        }
      }
    ]
  });
  prompt.present();
}


  showOptions(UsersId,UsersName,UsersEmail,UsersPassword,UsersType) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    
    buttons: [
      {
        text: 'Delete The User',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.removeUser(UsersId);
        }
      },{
        text: 'Update The User',
        icon: 'create',
        handler: () => {
          this.updateUser(UsersId,UsersName,UsersEmail,UsersPassword,UsersType);
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

removeUser(UsersId: string){
  let prompt = this.alertCtrl.create({
    title: 'Remove Confirmation',
    subTitle: UsersId,
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
             this.Users.remove(UsersId);
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




updateUser(UsersId,UsersName,UsersEmail,UsersPassword,UsersType){
  let prompt = this.alertCtrl.create({
    title: 'User Details',
    message: "Update the User Details",
    inputs: [
      {
        name: 'Name',
        placeholder: 'Name',
        value: UsersName
      },
      {
        name: 'Email',
        placeholder: 'Email',
        value: UsersEmail
      },
       {
        name: 'Password',
        placeholder: 'Password',
        value: UsersPassword
      },
       {
        name: 'Type',
        placeholder: 'Type',
        value: UsersType
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
          this.Users.update(UsersId, {
            Name: data.Name,
            Email: data.Email,
            Password: data.Password,
            Type: data.Type
          });
        }
      }
    ]
  });
  prompt.present();
}




//Search All
pickAll(){
  this.Users = this.af.database.list('/Users', {
    query: {
      orderByChild: 'key',
    }
  });
}

//Search Email
pickEmail(Email: string){
  this.Users = this.af.database.list('/Users', {
    query: {
      orderByChild: 'Email',
      equalTo: Email
    }
  });
}

//Search Name
pickName(Name: string){
  this.Users= this.af.database.list('/Users', {
    query: {
      orderByChild: 'Name',
      equalTo: Name
    }
  });
}

//Search Type
pickType(Type: string){
  this.Users = this.af.database.list('/Users', {
    query: {
      orderByChild: 'Type',
      equalTo: Type
    }
  });
}





}
