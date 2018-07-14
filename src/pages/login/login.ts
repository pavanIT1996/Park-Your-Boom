import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Singupselect } from '../singupselect/singupselect'
import { HomePage } from '../home/home';
import { ForgetPassword } from '../forget-password/forget-password';
import {AuthProviders, AuthMethods, AngularFire,FirebaseListObservable} from 'angularfire2'; 
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  email: any;
  PWD:any;
  password: any;
  Users: FirebaseListObservable<any>;

  form1: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire:AngularFire,
  public alertCtrl: AlertController,public formBuilder: FormBuilder) {
    this.Users=angfire.database.list('Users');



    this.form1=formBuilder.group({
        email:['',Validators.compose([
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
          Validators.required])],
        PWD:['',Validators.compose([
          Validators.required])],
    
    });
        //this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  dismiss() {
   //this.viewCtrl.dismiss();
   this.navCtrl.pop();
 }
 
  
     showErrorAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Enter the email and password',
      buttons: ['OK']
    });
    alert.present();
  }

       showErrorAlert2() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Enter the Valid email and password',
      buttons: ['OK']
    });
    alert.present();
  }


     showSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully LoggedIn',
      buttons: ['OK']
    });
    alert.present();
  }
login(){
  
  if(this.email==null || this.password == null ){
  this.showErrorAlert();

  }
  else{

  this.angfire.auth.login({
    email:this.email,
    password:this.password
  },
  {
    provider: AuthProviders.Password,
    method:AuthMethods.Password
  }).then((Response) => {
    console.log('Login Success' + JSON.stringify(Response));
    let currentuser = {
      email:Response.auth.email,
      picture: Response.auth.photoURL
    };
    window.localStorage.setItem('currentuser', JSON.stringify(currentuser));
    this.showSuccessAlert();
    //this.navCtrl.push(HomePage);
    this.navCtrl.pop(HomePage);
  }).catch((error) => {
    console.log(error);
    this.showErrorAlert2();

  })
}
}


  nextsingupsel(){
    this.navCtrl.push(Singupselect);
  }
    nexthome(){
    this.navCtrl.push(HomePage);
  }

      nextFpw(){
    this.navCtrl.push(ForgetPassword);
  }


}
