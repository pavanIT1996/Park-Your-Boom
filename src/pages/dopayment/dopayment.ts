import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { SelectVehicleType } from '../select-vehicle-type/select-vehicle-type';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

/**
 * Generated class for the Dopayment page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dopayment',
  templateUrl: 'dopayment.html',
})
export class Dopayment {
  Payment: FirebaseListObservable<any>;

form1: FormGroup;

Name:any;
CNum:any;
EDate:any;
PWD:any;

today
  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFire,
  public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.Payment = af.database.list('/Payment');
    this.form1=formBuilder.group({
        Name:['',Validators.compose([
          Validators.required])],
        Ctype:['',Validators.compose([
          Validators.required])],
        CNum:['',Validators.compose([
          Validators.pattern('^4[0-9]{12}(?:[0-9]{3})?$'),
          Validators.required])],
        CNum2:['',Validators.compose([
          Validators.pattern('^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$'),
          Validators.required])],
        CNum3:['',Validators.compose([
          Validators.pattern('^3[47][0-9]{13}$'),
          Validators.required])],
        CNum4:['',Validators.compose([
          Validators.pattern('^3(?:0[0-5]|[68][0-9])[0-9]{11}$'),
          Validators.required])],
        CNum5:['',Validators.compose([
          Validators.pattern('^6(?:011|5[0-9]{2})[0-9]{12}$'),
          Validators.required])],
        CNum6:['',Validators.compose([
          Validators.pattern('^(?:2131|1800|35\d{3})\d{11}$'),
          Validators.required])],
        EDate:['',Validators.compose([
          Validators.required])],
        PWD:['',Validators.compose([
          Validators.required])],
    });
     this.today = new Date().toISOString();
     //this.paydone();
    
  }


  paydone(){
    this.navCtrl.push(SelectVehicleType);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Dopayment');
  }

  addContact(Ctype,CNum,EDate,name,date) {
   if(Ctype==null || CNum==null || EDate==null || EDate==null || name==null || date==null)
   {
     this.showErrorAlert2();
   }
   else{
    this.Payment.push({
      Name:name,
      CurrentDate:date,
      ExpireDate:EDate,
      CardType:Ctype,
      CardNumber:CNum,
      Status:"Pending"

    }).then( newContact => {
      this.showADDSuccessAlert();
      this.paydone();
      this.navCtrl.pop();
    }, error => {
      this.showADDErroAlert();
      console.log(error);
    });
  }
  }


   showErrorAlert2() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Enter the all values',
      buttons: ['OK']
    });
    alert.present();
  }


   showADDSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Successfully Added to Payment',
      buttons: ['OK']
    });
    alert.present();
  }

  showADDErroAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Unsuccessfull',
      buttons: ['OK']
    });
    alert.present();
  }

  //Ctype,CNum,EDate,name,today

}
