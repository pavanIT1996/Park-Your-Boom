import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SendSms } from '../send-sms/send-sms';


/**
 * Generated class for the Feedback page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class Feedback {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Feedback');
  }
 // makecall(){
  //  scope.dialNumber = function(number) {
 // window.open('tel:' + number, '_system');
//}
  //}

  fbopen(){
    window.open('https://www.facebook.com/profile.php?id=100016941463833', '_system','location=yes');
    
    //window.open('https://www.facebook.com/latechnologies', '_system','location=yes');
  }

  emailopen(){
    //window.plugins.emailComposer.showEmailComposerWithCallback(callback, subject, body, toRecipients, ccRecipients, bccRecipients, isHtml, attachments, attachmentsData);
    window.open('https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin', '_system','location=yes');
  }

  sendsms(){
    this.navCtrl.push(SendSms);
  }

}
