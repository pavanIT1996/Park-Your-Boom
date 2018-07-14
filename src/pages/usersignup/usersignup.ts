import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { Login } from '../login/login';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/**
 * Generated class for the Usersignup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-usersignup',
  templateUrl: 'usersignup.html',
})
export class Usersignup {
 Users: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,af: AngularFire) {
    this.Users = af.database.list('/Users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Usersignup');
  }

          nextlogin(){
    this.navCtrl.push(Login);
  }


   showSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: 'User sign-up alert',
      subTitle: 'Created your New User Account',
      buttons: ['OK']
    });
    alert.present();
  }

   showErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Enter the all values',
      buttons: ['OK']
    });
    alert.present();
  }

/*NoteuqalAlert(pass, Rpword){
  if(pass!=Rpword){
    
  }
}*/

  


//addContact(email, name, pass, test) {
 addContact(email, pass, Rpword) {
   if(email==null || pass==null || Rpword==null)
   {
     this.showErrorAlert();
   }
   else{
         if(Rpword !== pass)
    {
        setTimeout(()=>{
          //this.loader.dismiss();
      });
      let confirm = this.alertCtrl.create({
      title: 'Error!',
      message: 'The Passwords do not match!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }
      ]
    });
     
    confirm.present();

    }
    else{ 
    this.Users.push({
      Email: email,
      //Name: name,
      Password: pass,
      Re_enter_Password:Rpword,
      Type: 1
    }).then( newContact => {
      this.showSuccessAlert();
      this.navCtrl.pop();
    }, error => {
      console.log(error);
    });
       }
  }
 }
}
